import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { TopAppBar } from '@/components/ui/top-app-bar'

export const CenterAlignedTopAppBar = () => {
  return (
    <div className="relative w-full max-w-screen-sm">
      <TopAppBar className="relative">
        <TopAppBar.Toolbar>
          <TopAppBar.LeadingSection>
            <IconButton variant="standard">
              <Icon symbol="menu" />
            </IconButton>
          </TopAppBar.LeadingSection>
          <TopAppBar.Headline className="px-6 text-center">
            Summer Hits
          </TopAppBar.Headline>
          <TopAppBar.TrailingSection>
            <IconButton variant="standard">
              <Icon symbol="account_circle" className="font-filled" />
            </IconButton>
          </TopAppBar.TrailingSection>
        </TopAppBar.Toolbar>
      </TopAppBar>
    </div>
  )
}

export const SmallTopAppBar = () => {
  return (
    <div className="relative w-full max-w-screen-sm">
      <TopAppBar className="relative">
        <TopAppBar.Toolbar>
          <TopAppBar.LeadingSection>
            <IconButton variant="standard">
              <Icon symbol="arrow_back" />
            </IconButton>
          </TopAppBar.LeadingSection>
          <TopAppBar.Headline>Thrift Stores in LA</TopAppBar.Headline>
          <TopAppBar.TrailingSection>
            <IconButton variant="standard">
              <Icon symbol="attach_file" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="today" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="more_vert" className="font-filled" />
            </IconButton>
          </TopAppBar.TrailingSection>
        </TopAppBar.Toolbar>
      </TopAppBar>
    </div>
  )
}

export const MediumTopAppBar = () => {
  return (
    <div className="relative w-full max-w-screen-sm">
      <TopAppBar className="relative">
        <TopAppBar.Toolbar>
          <TopAppBar.LeadingSection>
            <IconButton variant="standard">
              <Icon symbol="arrow_back" />
            </IconButton>
          </TopAppBar.LeadingSection>
          <div className="grow" />
          <TopAppBar.TrailingSection>
            <IconButton variant="standard">
              <Icon symbol="attach_file" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="today" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="more_vert" className="font-filled" />
            </IconButton>
          </TopAppBar.TrailingSection>
        </TopAppBar.Toolbar>
        <TopAppBar.Toolbar className="items-end px-4 pb-6">
          <TopAppBar.Headline className="text-headline-sm">
            Saved podcasts
          </TopAppBar.Headline>
        </TopAppBar.Toolbar>
      </TopAppBar>
    </div>
  )
}

export const LargeTopAppBar = () => {
  return (
    <div className="relative w-full max-w-screen-sm">
      <TopAppBar className="relative">
        <TopAppBar.Toolbar>
          <TopAppBar.LeadingSection>
            <IconButton variant="standard">
              <Icon symbol="arrow_back" />
            </IconButton>
          </TopAppBar.LeadingSection>
          <div className="grow" />
          <TopAppBar.TrailingSection>
            <IconButton variant="standard">
              <Icon symbol="attach_file" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="today" className="font-filled" />
            </IconButton>
            <IconButton variant="standard">
              <Icon symbol="more_vert" className="font-filled" />
            </IconButton>
          </TopAppBar.TrailingSection>
        </TopAppBar.Toolbar>
        <TopAppBar.Toolbar className="h-24 items-end px-4 pb-7">
          <TopAppBar.Headline className="line-clamp-2 text-headline-md">
            The best sushi spots in Los Angeles and Orange County
          </TopAppBar.Headline>
        </TopAppBar.Toolbar>
      </TopAppBar>
    </div>
  )
}
