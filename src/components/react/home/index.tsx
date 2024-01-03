import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { NavigationBar } from '@/components/ui/navigation-bar'
import { RadioButton } from '@/components/ui/radio-button'
import { Tooltip } from '@/components/ui/tooltip'

const navigationItem = (id: string, icon: string, label: string) => ({
  id,
  icon,
  label,
})

const navigationItems = [
  navigationItem('news', 'news', 'News'),
  navigationItem('global', 'globe', 'Global'),
  navigationItem('for-you', 'star', 'For you'),
  navigationItem('trending', 'trending_up', 'Trending'),
  navigationItem('archive', 'archive', 'Archive'),
]

export const NavigationBarDemo = () => {
  const [active, setActive] = useState('news')

  return (
    <NavigationBar className="relative">
      <NavigationBar.Container>
        {navigationItems.map(({ id, icon, label }) => (
          <NavigationBar.Item key={id} asChild active={id === active}>
            <button onClick={() => setActive(id)}>
              <NavigationBar.ItemIcon>
                <Icon symbol={icon} />
              </NavigationBar.ItemIcon>
              <NavigationBar.ItemLabel>{label}</NavigationBar.ItemLabel>
            </button>
          </NavigationBar.Item>
        ))}
      </NavigationBar.Container>
    </NavigationBar>
  )
}

export const RadioButtonDemo = () => {
  return (
    <RadioButton defaultValue="opt-1">
      <div className="flex flex-col gap-y-4">
        <RadioButton.Item value="opt-1" id="r1" />
        <RadioButton.Item value="opt-2" id="r2" />
      </div>
    </RadioButton>
  )
}

export const TooltipDemo = () => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <IconButton variant="standard">
            <Icon symbol="mood" />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>Smile</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}
