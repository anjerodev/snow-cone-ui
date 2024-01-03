import { BottomAppBar } from '@/components/ui/bottom-app-bar'
import { Fab } from '@/components/ui/fab'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'

export const DefaultBottomAppBar = () => {
  return (
    <div className="relative h-[300px] w-full max-w-screen-sm overflow-hidden bg-background">
      <BottomAppBar className="absolute">
        <IconButton variant="standard">
          <Icon symbol="check_box" />
        </IconButton>
        <IconButton variant="standard">
          <Icon symbol="brush" />
        </IconButton>
        <IconButton variant="standard">
          <Icon symbol="mic" />
        </IconButton>
        <IconButton variant="standard">
          <Icon symbol="image" />
        </IconButton>
        <Fab className="ml-auto shadow-none hover:shadow-none active:shadow-none">
          <Fab.Icon>
            <Icon symbol="add" />
          </Fab.Icon>
        </Fab>
      </BottomAppBar>
    </div>
  )
}
