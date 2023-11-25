import { Divider } from '@/components/ui/divider'
import { Stepper } from '@/components/ui/stepper'

export const Example = () => {
  return (
    <Stepper type="single" collapsible defaultValue="item-1" className="w-full">
      <Stepper.Item value="item-1">
        <Stepper.Trigger disabled>
          <Stepper.Indicator>1</Stepper.Indicator>
          Is it accessible?
        </Stepper.Trigger>
        <Stepper.Content>
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.
        </Stepper.Content>
      </Stepper.Item>
      <Divider orientation="vertical" className="ml-3.5 h-5 bg-outline" />
      <Stepper.Item value="item-2">
        <Stepper.Trigger>
          <Stepper.Indicator>2</Stepper.Indicator>
          Is it styled?
        </Stepper.Trigger>
        <Stepper.Content>
          Commodo eiusmod ea in anim elit ea velit labore id dolor et eiusmod.
          Sint amet ipsum ullamco eiusmod occaecat magna et amet officia sint
          magna consectetur quis do. Non irure anim anim irure amet deserunt.
          Elit esse do ex magna elit. Velit do in ut nostrud fugiat mollit
          cillum duis consectetur sit amet irure. Enim enim magna aliqua dolore
          aliqua exercitation. Amet culpa fugiat consequat magna nostrud Lorem
          adipisicing aute ut ad sunt cupidatat proident aliqua do.
        </Stepper.Content>
      </Stepper.Item>
      <Divider orientation="vertical" className="ml-3.5 h-5 bg-outline" />

      <Stepper.Item value="item-3">
        <Stepper.Trigger>
          <Stepper.Indicator>3</Stepper.Indicator> Is it animated?
        </Stepper.Trigger>
        <Stepper.Content>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </Stepper.Content>
      </Stepper.Item>
    </Stepper>
  )
}
