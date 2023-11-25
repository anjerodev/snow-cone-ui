import { useRef } from 'react'

import { useClipboard } from '@/hooks/use-clipboard'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { Tooltip } from '@/components/ui/tooltip'

interface ClipboardButtonProps {
  value?: string
}

export const ClipboardButton = ({ value }: ClipboardButtonProps) => {
  const clipboard = useClipboard({ timeout: 1000 })
  const ref = useRef(null)

  const handleCopy = () => {
    let valueToCopy = value ?? ''
    if (!value && ref.current) {
      const element = ref.current as HTMLElement
      const parent = element.closest('.copyable-container')
      const pre = parent?.querySelector('pre')
      const content = pre?.textContent
      if (content) valueToCopy = content
    }

    clipboard.copy(valueToCopy)
  }

  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <IconButton ref={ref} onClick={handleCopy} variant="standard">
            <Icon
              symbol="check"
              className={`animate-in zoom-in-50 spin-in-45 group-hover:font-emphasis ${
                clipboard.copied ? 'block' : 'hidden'
              }`}
            />
            <Icon
              symbol="content_copy"
              className={`animate-in zoom-in-50 spin-in-45 group-hover:font-emphasis ${
                clipboard.copied ? 'hidden' : 'block'
              }`}
            />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span className="text-body-sm">Copy to clipboard</span>
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}
