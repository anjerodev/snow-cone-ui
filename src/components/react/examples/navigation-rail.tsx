import { useState } from 'react'

import { Fab } from '@/components/ui/fab'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { NavigationRail } from '@/components/ui/navigation-rail'

const navigationItem = (id: string, icon: string, label: string) => ({
  id,
  icon,
  label,
})

const navigationItems = [
  navigationItem('maps', 'location_on', 'Maps'),
  navigationItem('places', 'home_work', 'Places'),
  navigationItem('favorites', 'bookmark', 'Favorites'),
  navigationItem('add', 'add_circle', 'Add'),
]

export const NavigationRailExample = () => {
  const [active, setActive] = useState('maps')

  return (
    <div className="relative flex min-h-[580px] w-full flex-col-reverse overflow-hidden rounded-sm bg-background md:flex-row">
      <NavigationRail className="relative">
        <NavigationRail.Container className="mb-14 hidden md:flex md:space-y-4">
          <IconButton variant="standard">
            <Icon symbol="menu" />
          </IconButton>
          <Fab className="shadow-none hover:shadow-none">
            <Icon symbol="directions_alt" />
          </Fab>
        </NavigationRail.Container>
        <NavigationRail.Container>
          {navigationItems.map(({ id, icon, label }) => (
            <NavigationRail.Item key={id} asChild active={id === active}>
              <button onClick={() => setActive(id)}>
                <NavigationRail.ItemIcon>
                  <Icon symbol={icon} />
                </NavigationRail.ItemIcon>
                <NavigationRail.ItemLabel>{label}</NavigationRail.ItemLabel>
              </button>
            </NavigationRail.Item>
          ))}
        </NavigationRail.Container>
      </NavigationRail>
      <div className="relative grow">
        <div className="sticky top-0 flex h-16 items-center bg-background px-3 md:hidden">
          <IconButton variant="standard">
            <Icon symbol="menu" />
          </IconButton>
        </div>
        <div className="p-4">
          <h1 className="text-display-sm">
            {navigationItems.find(({ id }) => id === active)?.label}
          </h1>
        </div>
        <Fab className="absolute bottom-4 right-4 md:hidden">
          <Icon symbol="directions_alt" />
        </Fab>
      </div>
    </div>
  )
}
