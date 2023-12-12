import { useState } from 'react'

import { useSnackbar } from '@/hooks/use-snackbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioButton } from '@/components/ui/radio-button'
import { SnackbarAction, type SnackbarProps } from '@/components/ui/snackbar'

export const SnackbarExample = () => {
  const { snackbar } = useSnackbar()

  const showSnackbar = () => {
    snackbar({
      description: 'Saved in "Vacation" album.',
    })
  }
  return <Button onClick={showSnackbar}>Show snackbar</Button>
}

export const SnackbarWithTitle = () => {
  const { snackbar } = useSnackbar()

  const showSnackbar = () => {
    snackbar({
      title: 'Oopsie-Daisy Alert!',
      description:
        "It seems you pressed the 'Do not press' button. Don't worry, I won't tell anyone!",
      closeable: false,
    })
  }
  return <Button onClick={showSnackbar}>Do not press</Button>
}

export const ActionSnackbar = () => {
  const { snackbar } = useSnackbar()

  const showSnackbar = () => {
    snackbar({
      description:
        'Connection timed out. Showing the lates locally served version.',
      action: <SnackbarAction altText="Retry">Retry</SnackbarAction>,
    })
  }
  return <Button onClick={showSnackbar}>Show snackbar</Button>
}

export const SnackbarWithoutCloseButton = () => {
  const { snackbar } = useSnackbar()

  const showSnackbar = () => {
    snackbar({
      description: 'Photo have been saved to your album.',
      closeable: false,
    })
  }
  return <Button onClick={showSnackbar}>Show snackbar</Button>
}

export const SeveritySnackbar = () => {
  const [severity, setSeverity] =
    useState<NonNullable<SnackbarProps['severity']>>('success')
  const { snackbar } = useSnackbar()

  const showSnackbar = () => {
    snackbar({
      description: `This is ${
        ['error', 'info'].includes(severity) ? 'an' : 'a'
      } ${severity} snackbar`,
      severity,
    })
  }

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div>
        <p className="mb-2 text-label-lg">Severity</p>
        <RadioButton
          value={severity}
          onValueChange={(value) =>
            setSeverity(value as NonNullable<SnackbarProps['severity']>)
          }
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="success" id="r1" />
            <Label htmlFor="r1">Success</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="info" id="r2" />
            <Label htmlFor="r2">Info</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="warning" id="r3" />
            <Label htmlFor="r3">Warning</Label>
          </div>
          <div className="flex items-center gap-x-4">
            <RadioButton.Item value="error" id="r4" />
            <Label htmlFor="r4">Error</Label>
          </div>
        </RadioButton>
      </div>
      <div className="flex grow items-center justify-center">
        <Button onClick={showSnackbar}>Show snackbar</Button>
      </div>
    </div>
  )
}
