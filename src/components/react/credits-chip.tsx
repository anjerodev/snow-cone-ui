import { Chip } from '@/components/ui/chip'

export const CreditsChip = ({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) => (
  <Chip asChild>
    <a href={href} target="_blank" className="!no-underline">
      <Chip.Icon>{children}</Chip.Icon>
      <Chip.Label>{label}</Chip.Label>
    </a>
  </Chip>
)
