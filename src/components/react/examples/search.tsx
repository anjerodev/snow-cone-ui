import { useRef, useState } from 'react'
import { CommandInput } from 'cmdk'

import { cn } from '@/lib/utils'
import { Avatar } from '@/components/ui/avatar'
import { Command } from '@/components/ui/command'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { SearchBar } from '@/components/ui/search'

export const SearchExample = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <SearchBar>
          <SearchBar.LeftSection>
            <Icon symbol="search" />
          </SearchBar.LeftSection>
          <SearchBar.Input placeholder="Search your library" />
          <SearchBar.RightSection className="pr-2">
            <IconButton variant="standard">
              <Icon symbol="mic" />
            </IconButton>
            <IconButton variant="standard">
              <Avatar className="h-[30px]">
                <Avatar.Image src="https://github.com/jepricreations.png" />
              </Avatar>
            </IconButton>
          </SearchBar.RightSection>
        </SearchBar>
      </div>
    </div>
  )
}

const Contact = (id: number, name: string, pic: string) => ({ id, name, pic })

const contacts = [
  Contact(1, 'Jepri', 'https://github.com/jepricreations.png'),
  Contact(
    2,
    'Alex',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  Contact(
    3,
    'Nikita',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  Contact(
    4,
    'Riccardo',
    'https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  Contact(
    5,
    'Mina',
    'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  //   TODO: Ask for permission to use their github avatar
  //   Contact(
  //     2,
  //     'Shadcn',
  //     'https://github.com/shadcn.png'
  //   ),
  // Contact(
  //     3,
  //     'Benoît',
  //     'https://github.com/benoitgrelard.png'
  //   ),
  //   Contact(
  //     4,
  //     'Vlad',
  //     'https://github.com/vladmoroz.png'
  //   ),
  //   Contact(
  //     5,
  //     'Midu',
  //     'https://github.com/midudev.png'
  //   ),
]

const historyItems = ['Peanut', 'End of school year', 'Renee']

export const SearchViewExample = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="relative min-h-[400px] w-full rounded-md bg-background p-4">
      <div className="mx-auto w-full max-w-sm">
        <Command className="bg-transparent">
          <SearchBar
            className={cn(
              'transition-[border-radius] duration-100',
              isOpen && 'rounded-b-none'
            )}
          >
            <SearchBar.LeftSection className="pl-2">
              <IconButton
                variant="standard"
                className={cn(
                  'animate-in fade-in-20 zoom-in-50',
                  isOpen ? 'hidden' : 'grid'
                )}
              >
                <Icon symbol="menu" />
              </IconButton>
              <IconButton
                variant="standard"
                className={cn(
                  'animate-in fade-in-20 zoom-in-50',
                  isOpen ? 'grid' : 'hidden'
                )}
              >
                <Icon symbol="arrow_back" />
              </IconButton>
            </SearchBar.LeftSection>
            <SearchBar.Input asChild>
              <CommandInput
                ref={inputRef}
                placeholder="Search replies"
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
              />
            </SearchBar.Input>
            <SearchBar.RightSection className="pr-2">
              <IconButton variant="standard">
                <Icon symbol="more_vert" />
              </IconButton>
            </SearchBar.RightSection>
          </SearchBar>

          {isOpen && (
            <SearchBar.ViewContainer>
              <Command.List>
                <Command.Group>
                  {historyItems.map((item) => (
                    <Command.Item key={item} value={item}>
                      <Icon symbol="history" />
                      <p>{item}</p>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
              <div className="p-4">
                <p className="mb-2 text-label-lg">Contacts</p>
                <div className="flex items-center gap-4">
                  {contacts.map(({ id, name, pic }) => (
                    <div key={id} className="flex flex-col items-center gap-1">
                      <Avatar>
                        <Avatar.Image src={pic} />
                        <Avatar.Fallback className="text-label-md">
                          {name.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar>
                      <span className="text-label-md">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SearchBar.ViewContainer>
          )}
        </Command>
      </div>
    </div>
  )
}
