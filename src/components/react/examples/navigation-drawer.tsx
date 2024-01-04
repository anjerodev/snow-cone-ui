import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { NavigationDrawer } from '@/components/ui/navigation-drawer'

export const NavigationDrawerExample = () => {
  return (
    <NavigationDrawer>
      <NavigationDrawer.Trigger asChild>
        <Button>Open</Button>
      </NavigationDrawer.Trigger>
      <NavigationDrawer.Content value="outbox">
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
            <Icon
              symbol="circle"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Subgroup Label
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_4">
            <Icon
              symbol="change_history"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Subgroup Label
          </NavigationDrawer.Item>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.SubGroup value="labels">
          <NavigationDrawer.Back>Main menu</NavigationDrawer.Back>
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
          <NavigationDrawer.SubGroupTrigger value="sub-labels">
            <Icon
              symbol="circle"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Sub Labels
          </NavigationDrawer.SubGroupTrigger>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.SubGroup value="sub-labels">
          <NavigationDrawer.Back>Labels</NavigationDrawer.Back>
          <NavigationDrawer.Item id="label_1">
            <Icon
              symbol="circle"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Sub Label
          </NavigationDrawer.Item>
          <NavigationDrawer.Item id="label_2">
            <Icon
              symbol="change_history"
              className="size-6 group-data-[active]/item:text-onSecondaryContainer"
            />
            Sub Label
          </NavigationDrawer.Item>
        </NavigationDrawer.SubGroup>

        <NavigationDrawer.Footer>Footer</NavigationDrawer.Footer>
      </NavigationDrawer.Content>
    </NavigationDrawer>
  )
}
