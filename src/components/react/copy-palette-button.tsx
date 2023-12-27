import { usePaletteStore } from '@/lib/store'
import { useClipboard } from '@/hooks/use-clipboard'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export const CopyPaletteButton = () => {
  const clipboard = useClipboard({ timeout: 1000 })
  const { palette } = usePaletteStore()

  const handleCopy = () => {
    clipboard.copy(JSON.stringify(palette))
  }

  return (
    <Button onClick={handleCopy} className="pl-4">
      <Icon
        symbol="done"
        className={`mr-2 w-5 text-[20px] animate-in zoom-in-50 ${
          clipboard.copied ? 'block' : 'hidden'
        }`}
      />
      <Icon
        symbol="content_copy"
        className={`mr-2 w-5 text-[20px] animate-in zoom-in-50 ${
          clipboard.copied ? 'hidden' : 'block'
        }`}
      />
      Copy palette
    </Button>
  )
}
