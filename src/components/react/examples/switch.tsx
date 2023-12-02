import { Icon } from '@/components/ui/icon'
import { Switch } from '@/components/ui/switch'

export const SimpleSwitch = () => {
  return <Switch />
}

export const SwitchWithCheckedIcon = () => {
  return <Switch widthIconOnChecked />
}

export const SwitchWithIcons = () => {
  return <Switch withIcons />
}

export const SwitchWithCustomIcons = () => {
  return (
    <Switch
      withIcons
      customIcons={{
        unChecked: <Icon symbol="check_indeterminate_small" />,
      }}
    />
  )
}
