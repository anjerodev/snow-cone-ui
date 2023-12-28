import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Divider } from '@/components/ui/divider'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'
import { OutlinedTextField } from '@/components/ui/text-field'
import { TopAppBar } from '@/components/ui/top-app-bar'

export const BasicDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Reset settings</Button>
      </Dialog.Trigger>
      <Dialog.Content className="md:max-w-[425px]">
        <Dialog.Header>
          <Dialog.Headline>Reset settings?</Dialog.Headline>
          <Dialog.SupportingText>
            This will reset your app preferences back to their default settings.
          </Dialog.SupportingText>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="text">Cancel</Button>
          </Dialog.Close>
          <Button variant="text">Accept</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}

const Account = (id: number, email: string, avatar: string) => ({
  id,
  email,
  avatar,
})
const accounts = [
  Account(
    1,
    'eevillanuevanotes@gmail.com',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  Account(
    2,
    'alloitsalejandro@gmail.com',
    'https://images.unsplash.com/photo-1610186594416-2c7c0131e35d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
  Account(
    3,
    'oliortega3000@gmail.com',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),
]

export const DialogWithIcon = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Reset settings</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:max-w-[324px]">
        <Dialog.Header>
          <span className="mx-auto">
            <Icon symbol="restart_alt" />
          </span>
          <Dialog.Headline className="text-center">
            Reset settings?
          </Dialog.Headline>
          <Dialog.SupportingText>
            This will reset your app preferences back to their default settings.
            The following accounts will also be signed out:
          </Dialog.SupportingText>
        </Dialog.Header>
        <Divider />
        <section className="space-y-4">
          {accounts.map(({ id, email, avatar }) => (
            <div key={id} className="flex items-center gap-4 text-body-md">
              <Avatar>
                <Avatar.Image src={avatar} />
              </Avatar>
              <p>{email}</p>
            </div>
          ))}
        </section>
        <Divider />
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="text">Cancel</Button>
          </Dialog.Close>
          <Button variant="text">Accept</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}

export const FullScreenDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>New Album</Button>
      </Dialog.Trigger>
      <Dialog.Content variant="full">
        <Dialog.Header className="relative">
          <TopAppBar className="sticky top-0">
            <TopAppBar.Toolbar>
              <TopAppBar.LeadingSection>
                <Dialog.Close asChild>
                  <IconButton variant="standard">
                    <Icon symbol="close" />
                  </IconButton>
                </Dialog.Close>
              </TopAppBar.LeadingSection>
              <TopAppBar.Headline>Create new album</TopAppBar.Headline>
              <TopAppBar.TrailingSection>
                <Button variant="text">Save</Button>
              </TopAppBar.TrailingSection>
            </TopAppBar.Toolbar>
          </TopAppBar>
        </Dialog.Header>
        <div className="space-y-10 p-6">
          <section className="grid gap-4">
            <OutlinedTextField>
              <OutlinedTextField.Input />
              <OutlinedTextField.Label>Album title</OutlinedTextField.Label>
            </OutlinedTextField>
            <OutlinedTextField>
              <OutlinedTextField.Input />
              <OutlinedTextField.Label>Description</OutlinedTextField.Label>
            </OutlinedTextField>
          </section>
          <section className="space-y-3">
            <p className="text-label-lg">Shared with</p>
            <div className="grid gap-4">
              {accounts.map(({ id, email, avatar }) => (
                <div key={id} className="flex items-center gap-4 text-body-md">
                  <Avatar>
                    <Avatar.Image src={avatar} />
                  </Avatar>
                  <p>{email}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Dialog.Content>
    </Dialog>
  )
}

export const ResponsiveDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>New Album</Button>
      </Dialog.Trigger>

      <Dialog.Content variant="responsive">
        <Dialog.Header className="relative sm:hidden">
          <TopAppBar className="sticky top-0">
            <TopAppBar.Toolbar>
              <TopAppBar.LeadingSection>
                <Dialog.Close asChild>
                  <IconButton variant="standard">
                    <Icon symbol="close" />
                  </IconButton>
                </Dialog.Close>
              </TopAppBar.LeadingSection>
              <TopAppBar.Headline>Create a new album</TopAppBar.Headline>
              <TopAppBar.TrailingSection>
                <Button variant="text">Save</Button>
              </TopAppBar.TrailingSection>
            </TopAppBar.Toolbar>
          </TopAppBar>
        </Dialog.Header>

        <Dialog.Header className="hidden sm:flex">
          <Dialog.Headline>Create a new album</Dialog.Headline>
        </Dialog.Header>

        <div className="space-y-10 p-6 sm:p-0">
          <section className="grid gap-4">
            <OutlinedTextField>
              <OutlinedTextField.Input />
              <OutlinedTextField.Label>Album title</OutlinedTextField.Label>
            </OutlinedTextField>
            <OutlinedTextField>
              <OutlinedTextField.Input />
              <OutlinedTextField.Label>Description</OutlinedTextField.Label>
            </OutlinedTextField>
          </section>
          <section className="space-y-3">
            <p className="text-label-lg">Shared with</p>
            <div className="grid gap-4">
              {accounts.map(({ id, email, avatar }) => (
                <div key={id} className="flex items-center gap-4 text-body-md">
                  <Avatar>
                    <Avatar.Image src={avatar} />
                  </Avatar>
                  <p>{email}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Dialog.Footer className="hidden sm:flex">
          <Dialog.Close asChild>
            <Button variant="text">Cancel</Button>
          </Dialog.Close>
          <Button variant="text">Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}
