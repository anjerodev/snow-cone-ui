import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Divider } from '@/components/ui/divider'

export const FullWidthDivider = () => {
  return (
    <div className="bg-background py-4">
      <ul>
        <li className="px-4">
          <div>
            <div className="text-title-md">Cumpleaños de mamá</div>
            <div className="text-onSurface/60">
              Hola, en mi casa si tu ayudas con la comi...
            </div>
          </div>
        </li>
        <Divider className="my-4" />
        <li className="px-4">
          <div>
            <div className="text-title-md">Graduación de Inés</div>
            <div className="text-onSurface/60">
              Hola hija mía aquí tienes unas fotos preci...
            </div>
          </div>
        </li>
        <Divider className="my-4" />
        <li className="px-4">
          <div>
            <div className="text-title-md">Pre sale concert tickets</div>
            <div className="text-onSurface/60">
              I just show there is a couple of shows lined...
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export const FullWidthDividerCard = () => {
  return (
    <Card variant="outlined" className="max-w-[400px] pb-2">
      <Card.Header className="flex-row items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="aspect-square h-20 rounded-sm"
        />
        <div>
          <Card.Headline>The fortnightly</Card.Headline>
          <Card.Subhead>
            How to farm with less water: lessons from a fourth-generat...
          </Card.Subhead>
        </div>
      </Card.Header>
      <Divider className="mt-4" />
      <Card.Footer className="pt-2">
        <Button variant="text" className="-ml-2">
          Read more
        </Button>
      </Card.Footer>
    </Card>
  )
}

export const InsetDivider = () => {
  return (
    <div className="bg-background p-4">
      <ul>
        <li className="flex items-center gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1670270312605-6401677bc7d6?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-square h-14 rounded-full bg-outlineVariant"
          />
          <div>
            <div className="text-title-md">Glass & Grace</div>
            <div className="text-onSurface/60">
              Sound Check. Making of Eye...
            </div>
          </div>
        </li>
        <Divider className="my-4" />
        <li className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-square h-14 rounded-full bg-outlineVariant"
          />
          <div>
            <div className="text-title-md">The fortnightly</div>
            <div className="text-onSurface/60">
              What Buttons Are They Pushing...
            </div>
          </div>
        </li>
        <Divider className="my-4" />
        <li className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-square h-14 rounded-full bg-outlineVariant"
          />
          <div>
            <div className="text-title-md">The Art of Zen</div>
            <div className="text-onSurface/60">
              How to Find Balance and Peace...
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
