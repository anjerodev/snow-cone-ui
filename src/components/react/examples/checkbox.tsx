import { Checkbox } from '@/components/ui/checkbox'
import { Icon } from '@/components/ui/icon'

export const DefaultCheckbox = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-6">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-label-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Pickles
        </label>
      </div>
      <div className="flex items-center gap-x-6">
        <Checkbox id="terms" disabled />
        <label
          htmlFor="terms"
          className="text-label-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Tomato
        </label>
      </div>
      <div className="flex items-center gap-x-6">
        <Checkbox id="terms" disabled checked />
        <label
          htmlFor="terms"
          className="text-label-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lettuce
        </label>
      </div>
    </div>
  )
}

export const CustomIconCheckbox = () => {
  return (
    <div className="flex items-center gap-x-6">
      <Checkbox
        id="receive-emails"
        customIcon={<Icon symbol="horizontal_rule" />}
      />
      <label
        htmlFor="receive-emails"
        className="text-label-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Receive emails
      </label>
    </div>
  )
}
