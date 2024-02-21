import { usePaletteStore } from '@/lib/store'
import { useClipboard } from '@/hooks/use-clipboard'
import { Fab } from '@/components/ui/fab'
import { Icon } from '@/components/ui/icon'

export const CopyPaletteButton = () => {
  const clipboard = useClipboard({ timeout: 1000 })
  const { palette } = usePaletteStore()

  const handleCopy = () => {
    clipboard.copy(JSON.stringify(palette))
  }

  return (
    <Fab onClick={handleCopy}>
      <Fab.Icon>
        <Icon
          symbol="done"
          className={`animate-in zoom-in-50 ${
            clipboard.copied ? 'block' : 'hidden'
          }`}
        />
        <Icon
          symbol="content_copy"
          className={`animate-in zoom-in-50 ${
            clipboard.copied ? 'hidden' : 'block'
          }`}
        />
      </Fab.Icon>
      <Fab.Label>Copy palette</Fab.Label>
    </Fab>
  )
}
