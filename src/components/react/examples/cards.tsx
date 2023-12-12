import { useState } from 'react'

import { imagesRootPath } from '@/lib/data'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ActionCard, Card, CardContent } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'

export const FilledCard = () => {
  return (
    <div className="grid h-full w-full place-items-center rounded-sm bg-background p-4">
      <Card className="max-w-[350px]">
        <Card.Thumbnail
          src={imagesRootPath + 'cards/card_example_thumbnail'}
          className="h-[200px]"
        />
        <Card.Header>
          <Card.Headline>Glass Souls' World Tour</Card.Headline>
          <Card.Subhead>From your recent favorites</Card.Subhead>
        </Card.Header>
        <CardContent>
          Glass Souls will deliver a show that will keep you on the edge of your
          seat.
        </CardContent>
        <Card.Footer>
          <Button>Buy Tickets</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export const ElevatedCard = () => {
  return (
    <Card variant="elevated" className="max-w-[350px]">
      <Card.Thumbnail
        src={imagesRootPath + 'cards/card_example_thumbnail'}
        className="h-[200px]"
      />
      <Card.Header>
        <Card.Headline>Glass Souls' World Tour</Card.Headline>
        <Card.Subhead>From your recent favorites</Card.Subhead>
      </Card.Header>
      <CardContent>
        Glass Souls will deliver a show that will keep you on the edge of your
        seat.
      </CardContent>
      <Card.Footer>
        <Button>Buy Tickets</Button>
      </Card.Footer>
    </Card>
  )
}

export const OutlinedCard = () => {
  return (
    <Card variant="outlined" className="max-w-[350px]">
      <Card.Thumbnail
        src={imagesRootPath + 'cards/card_example_thumbnail'}
        className="h-[200px]"
      />
      <Card.Header>
        <Card.Headline>Glass Souls' World Tour</Card.Headline>
        <Card.Subhead>From your recent favorites</Card.Subhead>
      </Card.Header>
      <CardContent>
        Glass Souls will deliver a show that will keep you on the edge of your
        seat.
      </CardContent>
      <Card.Footer>
        <Button>Buy Tickets</Button>
      </Card.Footer>
    </Card>
  )
}

export const ActionCardExample = () => {
  return (
    <div className="grid h-full w-full place-items-center rounded-sm bg-background p-4">
      <ActionCard className="max-w-[350px]">
        <a href="#action-card">
          <Card.Thumbnail
            src="https://lh3.googleusercontent.com/GC7uaJYBY37yDjlX_l1y8oXf_g1iNwiJDB4ulfbSx0QOsxee2ex3vg2HW-qyKCHFc8IyVh7KIofdCXR3pw3IRMrL1uMYtaMJKZ9Ou7yGfyWuLJvUPxpW=w2400-rj"
            className="h-[100px]"
          />
          <Card.Header>
            <Card.Headline className="text-title-md">
              Customizing Material
            </Card.Headline>
            <Card.Subhead className="text-label-lg">
              Make it personal
            </Card.Subhead>
          </Card.Header>
        </a>
      </ActionCard>
    </div>
  )
}

export const CardWithTopActions = () => {
  const [isFav, setIsFav] = useState(false)

  return (
    <Card className="max-w-[300px]">
      <Card.Header>
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image
                src="https://github.com/jepricreations.png"
                alt="Avatar"
              />
              <Avatar.Fallback>JC</Avatar.Fallback>
            </Avatar>
            <div className="text-label-md">
              <div className="text-onSurfaceVariant">Jepri Creations</div>
              <div className="text-onSurfaceVariant/60">Yesterday</div>
            </div>
          </div>
          <IconButton
            variant="standard"
            disableStateLayer
            className="bg-background hover:bg-background/70"
            onClick={() => setIsFav(!isFav)}
          >
            <Icon
              symbol="star"
              className={
                isFav
                  ? 'duration-100 ease-out font-filled'
                  : 'duration-0 font-regular'
              }
            />
          </IconButton>
        </div>
        <Card.Headline className="text-title-md font-normal">
          Clay pot fair on Saturday?
        </Card.Headline>
      </Card.Header>
      <CardContent>
        I think it's time for us to finally try that new noodle shop downtown
        that doesn't use menus. Anyone els...
      </CardContent>
    </Card>
  )
}
