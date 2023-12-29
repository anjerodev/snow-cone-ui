'use client'

import { createContext, Fragment, useContext, useMemo, useState } from 'react'
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type Active,
  type DraggableSyntheticListeners,
  type DragOverlayProps,
  type DropAnimation,
  type UniqueIdentifier,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { cn } from '@/lib/utils'
import { List, ListItem } from '@/components/ui/list'

interface Context {
  attributes: Record<string, any>
  listeners: DraggableSyntheticListeners
  ref(node: HTMLElement | null): void
}

interface BaseItemProps {
  id: UniqueIdentifier
}

interface SortableListProps<T extends BaseItemProps> {
  items: T[]
  onChange(items: T[]): void
  renderItem(item: T): React.ReactNode
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
})

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.2',
      },
    },
  }),
}

export function SortableOverlay(props: DragOverlayProps) {
  return <DragOverlay dropAnimation={dropAnimationConfig} {...props} />
}

const SortableListRoot = <T extends BaseItemProps>({
  items,
  onChange,
  renderItem,
}: SortableListProps<T>) => {
  const [active, setActive] = useState<Active | null>(null)
  const activeItem = useMemo(
    () => items.find((item) => item.id === active?.id),
    [active, items]
  )
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active)
      }}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id)
          const overIndex = items.findIndex(({ id }) => id === over.id)

          onChange(arrayMove(items, activeIndex, overIndex))
        }
        setActive(null)
      }}
      onDragCancel={() => {
        setActive(null)
      }}
    >
      <SortableContext items={items}>
        <List>
          {items.map((item) => (
            <Fragment key={item.id}>{renderItem(item)}</Fragment>
          ))}
        </List>
      </SortableContext>
      <SortableOverlay>
        {activeItem ? renderItem(activeItem) : null}
      </SortableOverlay>
    </DndContext>
  )
}

interface SorteableItemProps
  extends BaseItemProps,
    Omit<React.ComponentPropsWithoutRef<typeof ListItem>, 'id'> {}

const SortableItem = ({ className, id, ...props }: SorteableItemProps) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id })
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  )

  const style: React.CSSProperties = {
    opacity: isDragging ? 0.2 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  }

  return (
    <SortableItemContext.Provider value={context}>
      <ListItem
        ref={setNodeRef}
        className={className}
        style={style}
        {...props}
      />
    </SortableItemContext.Provider>
  )
}
SortableItem.displayName = 'SortableItem'

const SortableHandle = (props: React.ComponentPropsWithoutRef<'button'>) => {
  const { attributes, listeners, ref } = useContext(SortableItemContext)

  return (
    <button
      ref={ref}
      className={cn('shrink-0 cursor-move', props.className)}
      {...attributes}
      {...listeners}
      {...props}
    />
  )
}

const SortableList = Object.assign(SortableListRoot, {
  Item: SortableItem,
  Handle: SortableHandle,
})

export { SortableList, SortableListRoot, SortableItem, SortableHandle }
