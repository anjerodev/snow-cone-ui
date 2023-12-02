import { Fab } from '@/components/ui/fab.tsx'
import { Icon } from '@/components/ui/icon.tsx'

export const DefaultFAB = () => {
  return (
    <Fab>
      <Fab.Icon>
        <Icon symbol="palette" />
      </Fab.Icon>
    </Fab>
  )
}

export const SmallFAB = () => {
  return (
    <Fab size="small">
      <Fab.Icon>
        <Icon symbol="palette" />
      </Fab.Icon>
    </Fab>
  )
}

export const LargeFAB = () => {
  return (
    <Fab size="large">
      <Fab.Icon>
        <Icon symbol="palette" className="text-[32px]" />
      </Fab.Icon>
    </Fab>
  )
}

export const ExtendedFAB = () => {
  return (
    <Fab>
      <Fab.Icon>
        <Icon symbol="edit" />
      </Fab.Icon>
      <Fab.Label>New task</Fab.Label>
    </Fab>
  )
}

export const ResponsiveExtendedFAB = () => {
  return (
    <Fab variant="tertiary">
      <Fab.Icon>
        <Icon symbol="edit" />
      </Fab.Icon>
      <Fab.Label className="hidden sm:block">New task</Fab.Label>
    </Fab>
  )
}
