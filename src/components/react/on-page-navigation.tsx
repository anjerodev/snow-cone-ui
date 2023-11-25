import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { Sheet } from '@/components/ui/sheet'

export const OnPageNavigation = ({
  items,
  title,
}: {
  title: string
  items?: {
    text: string
    slug: string
  }[]
}) => {
  return (
    <div className="absolute right-0 top-0 lg:hidden">
      <Sheet>
        <Sheet.Trigger asChild>
          <IconButton>
            <Icon
              symbol="format_list_bulleted"
              className="group-hover:font-emphasis"
            />
          </IconButton>
        </Sheet.Trigger>
        <Sheet.Content className="rounded-l-lg" backdrop={false}>
          <Sheet.Header className="mb-3">
            <p className="px-4 text-label-md">On this page</p>
            <p className="px-4 text-headline-md">{title}</p>
          </Sheet.Header>
          <nav>
            <ul>
              {items?.map((link) => (
                <li key={link.slug}>
                  <a
                    href={'#' + link.slug}
                    className="block w-full rounded-full bg-transparent px-4 py-2 transition-colors hover:bg-inverseSurface/4"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Sheet.Content>
      </Sheet>
    </div>
  )
}
