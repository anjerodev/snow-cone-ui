import { IconButton } from '@/components/ui/icon-button.tsx'
import { Icon } from '@/components/ui/icon.tsx'

export const FilledIconButton = () => {
  return (
    <IconButton>
      <Icon symbol="settings" />
    </IconButton>
  )
}

export const FilledTonalIconButton = () => {
  return (
    <IconButton variant="tonal">
      <Icon symbol="settings" />
    </IconButton>
  )
}

export const OutlinedIconButton = () => {
  return (
    <IconButton variant="outlined">
      <Icon symbol="settings" />
    </IconButton>
  )
}

export const StandardIconButton = () => {
  return (
    <IconButton variant="standard">
      <Icon symbol="settings" />
    </IconButton>
  )
}
