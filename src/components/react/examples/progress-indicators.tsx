import { useState } from 'react'

import { Label } from '@/components/ui/label'
import {
  CircularProgress,
  LinearProgress,
} from '@/components/ui/progress-indicator'
import { RadioButton } from '@/components/ui/radio-button'

export const DeterminateLinearProgress = () => {
  const [progress, setProgress] = useState(13)

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div>
        <p className="mb-2 text-label-lg">Progress</p>
        <RadioButton
          value={progress.toString()}
          onValueChange={(value) => setProgress(parseInt(value))}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="13" id="r1" />
            <Label htmlFor="r1">13</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="25" id="r2" />
            <Label htmlFor="r2">25</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="60" id="r3" />
            <Label htmlFor="r3">60</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="100" id="r4" />
            <Label htmlFor="r4">100</Label>
          </div>
        </RadioButton>
      </div>
      <div className="w-full max-w-[300px]">
        <LinearProgress value={progress} />
      </div>
    </div>
  )
}

export const IndeterminateLinearProgress = () => {
  return (
    <div className="w-full max-w-[300px]">
      <LinearProgress />
    </div>
  )
}

export const DeterminateCircularProgress = () => {
  const [progress, setProgress] = useState(13)

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div>
        <p className="mb-2 text-label-lg">Progress</p>
        <RadioButton
          value={progress.toString()}
          onValueChange={(value) => setProgress(parseInt(value))}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="13" id="r1" />
            <Label htmlFor="r1">13</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="25" id="r2" />
            <Label htmlFor="r2">25</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="60" id="r3" />
            <Label htmlFor="r3">60</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="100" id="r4" />
            <Label htmlFor="r4">100</Label>
          </div>
        </RadioButton>
      </div>
      <div className="flex w-full max-w-[300px] items-center justify-center">
        <CircularProgress value={progress} />
      </div>
    </div>
  )
}

export const IndeterminateCircularProgress = () => {
  return <CircularProgress />
}
