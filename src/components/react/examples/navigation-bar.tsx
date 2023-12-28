import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { NavigationBar } from '@/components/ui/navigation-bar'

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

export const NavigationBarExample = () => {
  const [active, setActive] = useState('news')

  return (
    <div className="relative flex min-h-[300px] w-full max-w-screen-sm flex-col overflow-hidden rounded-sm bg-background">
      <div className="relative grow">
        <div className="p-4">
          <h1 className="text-display-sm">
            {navigationItems.find(({ id }) => id === active)?.label}
          </h1>
        </div>
      </div>
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
    </div>
  )
}
