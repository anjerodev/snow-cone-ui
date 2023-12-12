import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'

export const SmallBadge = () => {
  return (
    <div className="flex gap-6">
      <Badge>
        <Icon symbol="house" />
      </Badge>
    </div>
  )
}

export const LargeBadge = () => {
  return (
    <div className="flex gap-6">
      <Badge size="large" content="3">
        <Icon symbol="notifications" />
      </Badge>
      <Badge size="large" content="999+">
        <Icon symbol="notifications" />
      </Badge>
    </div>
  )
}
