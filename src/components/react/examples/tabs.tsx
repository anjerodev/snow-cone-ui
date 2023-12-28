import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'
import { Tabs } from '@/components/ui/tabs'

export const PrimaryTabsWithIcons = () => {
  return (
    <div className="w-full bg-background">
      <Tabs defaultValue="flights" className="max-w-screen-sm">
        <Tabs.List className="h-16">
          <Tabs.Trigger value="flights">
            <Icon symbol="flight" />
            Flights
          </Tabs.Trigger>
          <Tabs.Trigger value="trips">
            <Badge content="3" size="large">
              <Icon symbol="trip" />
            </Badge>
            Trips
          </Tabs.Trigger>
          <Tabs.Trigger value="discover">
            <Icon symbol="explore" />
            Discover
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="flights" className="p-6">
          <h2 className="text-title-lg">Flights</h2>
        </Tabs.Content>
        <Tabs.Content value="trips" className="p-6">
          <h2 className="text-title-lg">Trips</h2>
        </Tabs.Content>
        <Tabs.Content value="discover" className="p-6">
          <h2 className="text-title-lg">Discover</h2>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

export const SecondaryTabs = () => {
  return (
    <div className="w-full bg-background">
      <Tabs defaultValue="flights" className="max-w-screen-sm">
        <Tabs.List className="[&_.indicator]:w-full [&_.indicator]:rounded-none">
          <Tabs.Trigger value="flights">Flights</Tabs.Trigger>
          <Tabs.Trigger value="trips">
            <Badge content="3" size="large" className="static ml-2">
              Trips
            </Badge>
          </Tabs.Trigger>
          <Tabs.Trigger value="discover">Discover</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="flights" className="p-6">
          <h2 className="text-title-lg">Flights</h2>
        </Tabs.Content>
        <Tabs.Content value="trips" className="p-6">
          <h2 className="text-title-lg">Trips</h2>
        </Tabs.Content>
        <Tabs.Content value="discover" className="p-6">
          <h2 className="text-title-lg">Discover</h2>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

export const ScrollableTabs = () => {
  return (
    <div className="w-full max-w-sm bg-background">
      <Tabs defaultValue="akita" className="max-w-sm overflow-hidden">
        <div className="scrollbar-hidden max-w-full overflow-auto pl-14">
          <Tabs.List className="flex-nowrap justify-start">
            <Tabs.Trigger value="akita">Akita</Tabs.Trigger>
            <Tabs.Trigger value="alaskan">Alaskan</Tabs.Trigger>
            <Tabs.Trigger value="australian_shepard">
              Australian Shepard
            </Tabs.Trigger>
            <Tabs.Trigger value="Azawakh">Azawakh</Tabs.Trigger>
            <Tabs.Trigger value="labrador-retriever">
              Labrador Retriever
            </Tabs.Trigger>
            <Tabs.Trigger value="french-bulldog">French Bulldog</Tabs.Trigger>
            <Tabs.Trigger value="beagle">Beagle</Tabs.Trigger>
            <Tabs.Trigger value="rottweiler">Rottweiler</Tabs.Trigger>
          </Tabs.List>
        </div>
        <Tabs.Content value="akita" className="p-6">
          <h2 className="text-title-lg">Akita</h2>
        </Tabs.Content>
        <Tabs.Content value="alaskan" className="p-6">
          <h2 className="text-title-lg">Alaskan</h2>
        </Tabs.Content>
        <Tabs.Content value="australian_shepard" className="p-6">
          <h2 className="text-title-lg">Australian Shepard</h2>
        </Tabs.Content>
        <Tabs.Content value="Azawakh" className="p-6">
          <h2 className="text-title-lg">Azawakh</h2>
        </Tabs.Content>
        <Tabs.Content value="labrador-retriever" className="p-6">
          <h2 className="text-title-lg">Labrador Retriever</h2>
        </Tabs.Content>
        <Tabs.Content value="french-bulldog" className="p-6">
          <h2 className="text-title-lg">French Bulldog</h2>
        </Tabs.Content>
        <Tabs.Content value="beagle" className="p-6">
          <h2 className="text-title-lg">Beagle</h2>
        </Tabs.Content>
        <Tabs.Content value="rottweiler" className="p-6">
          <h2 className="text-title-lg">Rottweiler</h2>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}
