import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { Tooltip } from '@/components/ui/tooltip'

export const PlainTooltip = () => {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <IconButton variant="standard">
            <Icon symbol="notifications" />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>Notifications</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}

export const RichTooltip = () => {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <IconButton variant="standard">
            <Icon symbol="brush" />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content
          variant="rich"
          side="right"
          align="start"
          alignOffset={40}
          sideOffset={0}
        >
          <Tooltip.Subhead>Paint Tool</Tooltip.Subhead>
          <Tooltip.SupportingText>
            Add annotation and highlights with the paint tool.
          </Tooltip.SupportingText>
          <Tooltip.ActionsContainer>
            <Button variant="text">Learn more</Button>
          </Tooltip.ActionsContainer>
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}
