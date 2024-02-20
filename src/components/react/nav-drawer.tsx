import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { NavigationDrawer } from '@/components/ui/navigation-drawer'
import { ThemeToggle } from '@/components/react/theme-toggle'

const schema = {
  favorites: { children: ['label_3', 'label_4'] },
  labels: { children: ['label_5', 'label_6'] },
  'sub-labels': { parent: 'labels', children: ['label_7', 'label_8'] },
  'sub-sub-labels': { parent: 'sub-labels', children: ['label_9', 'label_10'] },
}

export const NavDrawer = () => {
  const value = 'label_7'

  return (
    <NavigationDrawer>
      <NavigationDrawer.Trigger asChild>
        <IconButton variant="standard">
          <Icon symbol="menu" />
        </IconButton>
      </NavigationDrawer.Trigger>

      <NavigationDrawer.Content value={value} schema={schema}>
        <NavigationDrawer.Close asChild>
          <IconButton variant="standard">
            <Icon symbol="menu_open" />
          </IconButton>
        </NavigationDrawer.Close>

        <NavigationDrawer.Group className="mt-3">
          <NavigationDrawer.Header>
            <NavigationDrawer.Headline>Headline</NavigationDrawer.Headline>
          </NavigationDrawer.Header>
          <NavigationDrawer.Item id="inbox" asChild>
            <a href="#inbox">
              <Icon
                symbol="inbox"
                className="size-6 group-data-[active]/item:text-onSecondaryContainer"
              />
              Inbox
            </a>
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="outbox" asChild>
            <a href="#outbox">
              <Icon
                symbol="outbox"
                className="size-6 group-data-[active]/item:text-onSecondaryContainer"
              />
              Outbox
            </a>
          </NavigationDrawer.Item>

          <NavigationDrawer.SubGroupTrigger value="favorites">
            <Icon
              symbol="favorites"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Favorites
          </NavigationDrawer.SubGroupTrigger>

          <NavigationDrawer.SubGroupTrigger value="labels">
            <Icon
              symbol="circle"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Labels
          </NavigationDrawer.SubGroupTrigger>

          <NavigationDrawer.ExpandableRoot type="single" collapsible>
            <NavigationDrawer.ExpandableItem value="android">
              <NavigationDrawer.ExpandableTrigger>
                Android
              </NavigationDrawer.ExpandableTrigger>
              <NavigationDrawer.ExpandableContent>
                <NavigationDrawer.Item id="mcd-android">
                  MCD Android
                </NavigationDrawer.Item>
                <NavigationDrawer.Item id="jetpack">
                  Jetpack Compose
                </NavigationDrawer.Item>
              </NavigationDrawer.ExpandableContent>
            </NavigationDrawer.ExpandableItem>
          </NavigationDrawer.ExpandableRoot>

          <NavigationDrawer.Divider />

          <NavigationDrawer.Header>
            <NavigationDrawer.Headline>Labels</NavigationDrawer.Headline>
          </NavigationDrawer.Header>
          <NavigationDrawer.Item id="label_1">
            <Icon
              symbol="circle"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Label
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_2">
            <Icon
              symbol="change_history"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Label
          </NavigationDrawer.Item>
        </NavigationDrawer.Group>

        <NavigationDrawer.SubGroup value="favorites">
          <NavigationDrawer.Back>Main menu</NavigationDrawer.Back>
          <NavigationDrawer.Item id="label_3">
            Subgroup Label 3
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_4">
            Subgroup Label 4
          </NavigationDrawer.Item>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.SubGroup value="labels">
          <NavigationDrawer.Back>Main menu</NavigationDrawer.Back>
          <NavigationDrawer.Item id="label_5">Label 5</NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_6">Label 6</NavigationDrawer.Item>
          <NavigationDrawer.SubGroupTrigger value="sub-labels">
            Sub Labels
          </NavigationDrawer.SubGroupTrigger>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.SubGroup value="sub-labels">
          <NavigationDrawer.Back>Labels</NavigationDrawer.Back>
          <NavigationDrawer.Item id="label_7">
            Sub Label 7
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_8">
            Sub Label 8
          </NavigationDrawer.Item>
          <NavigationDrawer.SubGroupTrigger value="sub-sub-labels">
            Sub Sub Labels
          </NavigationDrawer.SubGroupTrigger>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.SubGroup value="sub-sub-labels">
          <NavigationDrawer.Back>Sub Labels</NavigationDrawer.Back>
          <NavigationDrawer.Item id="label_9">
            Sub Label 9
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_10">
            Sub Label 10
          </NavigationDrawer.Item>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.Footer>
          <ThemeToggle />
        </NavigationDrawer.Footer>
      </NavigationDrawer.Content>
    </NavigationDrawer>
  )
}
