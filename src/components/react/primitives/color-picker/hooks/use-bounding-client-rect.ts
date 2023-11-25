import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import type { Position, Size } from '../types'

const isClient = () => typeof window !== 'undefined'

const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect

export function useBoundingClientRect<T extends HTMLElement>(): [
  React.RefObject<T>,
  Size,
  () => Position,
] {
  const ref = useRef<T>(null)

  const [resizeCounter, setResizeCounter] = useState(0)

  const onResize = useCallback(
    () => setResizeCounter((resizeCounter) => resizeCounter + 1),
    []
  )

  useIsomorphicLayoutEffect(() => {
    // This code will not execute on server side
    // and there will be no warning prompted.
    window.addEventListener('resize', onResize, false)

    const observer = new ResizeObserver(onResize)

    if (ref.current) observer.observe(ref.current)

    return () => {
      window.removeEventListener('resize', onResize, false)
      observer.disconnect()
    }
  }, [onResize])

  const size = useMemo(() => {
    const { width = 1, height = 1 } =
      ref.current?.getBoundingClientRect() ?? ({} as DOMRect)

    return { width, height }
  }, [resizeCounter])

  const getPosition = useCallback(() => {
    const {
      left = 1,
      right = 1,
      top = 1,
      bottom = 1,
    } = ref.current?.getBoundingClientRect() ?? ({} as DOMRect)

    return { left, right, top, bottom }
  }, [])

  return [ref, size, getPosition]
}
