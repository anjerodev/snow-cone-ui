// Inspired by react-hot-toast library
// From shadcn/ui

import * as React from 'react'

import type {
  SnackbarActionElement,
  SnackbarProps,
} from '@/components/ui/snackbar'

const SNACKBAR_LIMIT = 1
const SNACKBAR_REMOVE_DELAY = 1000000

type SnackbarManagerType = SnackbarProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: SnackbarActionElement
  closeable?: boolean
}

const actionTypes = {
  ADD_SNACKBAR: 'ADD_SNACKBAR',
  UPDATE_SNACKBAR: 'UPDATE_SNACKBAR',
  DISMISS_SNACKBAR: 'DISMISS_SNACKBAR',
  REMOVE_SNACKBAR: 'REMOVE_SNACKBAR',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_SNACKBAR']
      snackbar: SnackbarManagerType
    }
  | {
      type: ActionType['UPDATE_SNACKBAR']
      snackbar: Partial<SnackbarManagerType>
    }
  | {
      type: ActionType['DISMISS_SNACKBAR']
      snackbarId?: SnackbarManagerType['id']
    }
  | {
      type: ActionType['REMOVE_SNACKBAR']
      snackbarId?: SnackbarManagerType['id']
    }

interface State {
  snackbars: SnackbarManagerType[]
}

const snackbarTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (snackbarId: string) => {
  if (snackbarTimeouts.has(snackbarId)) {
    return
  }

  const timeout = setTimeout(() => {
    snackbarTimeouts.delete(snackbarId)
    dispatch({
      type: 'REMOVE_SNACKBAR',
      snackbarId: snackbarId,
    })
  }, SNACKBAR_REMOVE_DELAY)

  snackbarTimeouts.set(snackbarId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_SNACKBAR':
      return {
        ...state,
        snackbars: [action.snackbar, ...state.snackbars].slice(
          0,
          SNACKBAR_LIMIT
        ),
      }

    case 'UPDATE_SNACKBAR':
      return {
        ...state,
        snackbars: state.snackbars.map((t) =>
          t.id === action.snackbar.id ? { ...t, ...action.snackbar } : t
        ),
      }

    case 'DISMISS_SNACKBAR': {
      const { snackbarId } = action

      if (snackbarId) {
        addToRemoveQueue(snackbarId)
      } else {
        state.snackbars.forEach((snackbar) => {
          addToRemoveQueue(snackbar.id)
        })
      }

      return {
        ...state,
        snackbars: state.snackbars.map((t) =>
          t.id === snackbarId || snackbarId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case 'REMOVE_SNACKBAR':
      if (action.snackbarId === undefined) {
        return {
          ...state,
          snackbars: [],
        }
      }
      return {
        ...state,
        snackbars: state.snackbars.filter((t) => t.id !== action.snackbarId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { snackbars: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

interface Snackbar extends Omit<SnackbarManagerType, 'id'> {}

function snackbar({ ...props }: Snackbar) {
  const id = genId()

  const update = (props: SnackbarManagerType) =>
    dispatch({
      type: 'UPDATE_SNACKBAR',
      snackbar: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_SNACKBAR', snackbarId: id })

  dispatch({
    type: 'ADD_SNACKBAR',
    snackbar: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useSnackbar() {
  const [state, setState] = React.useState<State>(memoryState)
  let bottomNavigationRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    listeners.push(setState)

    const railElement = document.querySelector('.bottom-bar')
    bottomNavigationRef.current = railElement as HTMLDivElement

    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    snackbar,
    dismiss: (snackbarId?: string) =>
      dispatch({ type: 'DISMISS_SNACKBAR', snackbarId }),
    elevated: bottomNavigationRef !== null,
  }
}

export { useSnackbar, snackbar }
