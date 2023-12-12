import { Label } from '@/components/ui/label'
import { RadioButton } from '@/components/ui/radio-button'

export const RadioButtonExample = () => {
  return (
    <div>
      <p className="text-label-lg">Language</p>
      <RadioButton defaultValue="spanish">
        <div className="flex items-center gap-x-4">
          <RadioButton.Item value="english" id="r1" />
          <Label htmlFor="r1">English</Label>
        </div>
        <div className="flex items-center gap-x-4">
          <RadioButton.Item value="spanish" id="r2" />
          <Label htmlFor="r2">Spanish</Label>
        </div>
        <div className="flex items-center gap-x-4">
          <RadioButton.Item value="chinese" id="r3" />
          <Label htmlFor="r3">Chinese (Mandarin)</Label>
        </div>
      </RadioButton>
    </div>
  )
}
