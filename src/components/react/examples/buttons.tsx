import { Button } from '@/components/ui/button'
import { CircularProgress } from '@/components/ui/circular-progress'
import { Icon } from '@/components/ui/icon'

export const FilledButton = () => {
  return <Button>Make payment</Button>
}

export const TonalButton = () => {
  return <Button variant="tonal">Visit site</Button>
}

export const ElevatedButton = () => {
  return <Button variant="elevated">Explore</Button>
}

export const OutlinedButton = () => {
  return <Button variant="outlined">Next</Button>
}

export const TextButton = () => {
  return <Button variant="text">Retry</Button>
}

export const DestructiveButton = () => {
  return <Button variant="destructive">Remove account</Button>
}

export const ButtonWithIcon = () => {
  return (
    <Button className="pl-4">
      <Icon
        symbol="add"
        className="mr-2 text-[20px] group-hover:font-emphasis"
      />
      New document
    </Button>
  )
}

export const LoadingButton = () => {
  return (
    <Button disabled className="pl-4">
      <CircularProgress className="mr-2 h-5 w-5 text-onSurface/38" />
      Loading
    </Button>
  )
}

export const AsChildButton = () => {
  return (
    <Button asChild className="pl-4">
      <a href="/components/buttons">Go to Buttons</a>
    </Button>
  )
}
