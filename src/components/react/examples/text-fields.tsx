import { Icon } from '@/components/ui/icon'
import { FilledTextField, OutlinedTextField } from '@/components/ui/text-field'

/**
 * Filled Text Field Examples
 */

export const FilledTextFieldDefault = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextField>
          <FilledTextField.Input placeholder="First name" />
        </FilledTextField>
      </div>
    </div>
  )
}

export const FilledTextFieldWithLabel = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextField>
          <FilledTextField.Input placeholder="Your beautiful first name" />
          <FilledTextField.Label>First name</FilledTextField.Label>
        </FilledTextField>
      </div>
    </div>
  )
}

export const FilledTextFieldWithSupportingText = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <FilledTextField>
            <FilledTextField.Input />
            <FilledTextField.Label>Username</FilledTextField.Label>
          </FilledTextField>
          <FilledTextField.SupportingText>
            This will be how other users know you.
          </FilledTextField.SupportingText>
        </div>
      </div>
    </div>
  )
}

export const FilledTextFieldWithLeadingIcon = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextField>
          <FilledTextField.Decoration>
            <Icon symbol="person" />
          </FilledTextField.Decoration>
          <FilledTextField.Input />
          <FilledTextField.Label>Username</FilledTextField.Label>
        </FilledTextField>
      </div>
    </div>
  )
}

export const FilledTextFieldWithTrailingIcon = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextField>
          <FilledTextField.Input placeholder="Search..." />
          <FilledTextField.Decoration>
            <Icon symbol="search" />
          </FilledTextField.Decoration>
        </FilledTextField>
      </div>
    </div>
  )
}

export const FilledTextFieldDisabled = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextField>
          <FilledTextField.Input disabled />
          <FilledTextField.Label>Username</FilledTextField.Label>
        </FilledTextField>
      </div>
    </div>
  )
}

export const FilledTextFieldWithError = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <FilledTextField error>
            <FilledTextField.Input />
            <FilledTextField.Label>Username</FilledTextField.Label>
          </FilledTextField>
          <FilledTextField.SupportingText className="text-error">
            The username can not be empty.
          </FilledTextField.SupportingText>
        </div>
      </div>
    </div>
  )
}

/**
 * Outlined Text Field Examples
 */

export const OutlinedTextFieldDefault = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextField>
          <OutlinedTextField.Input placeholder="First name" />
        </OutlinedTextField>
      </div>
    </div>
  )
}

export const OutlinedTextFieldWithLabel = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextField>
          <OutlinedTextField.Input placeholder="Your beautiful first name" />
          <OutlinedTextField.Label>First name</OutlinedTextField.Label>
        </OutlinedTextField>
      </div>
    </div>
  )
}

export const OutlinedTextFieldWithSupportingText = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <OutlinedTextField>
            <OutlinedTextField.Input />
            <OutlinedTextField.Label>Username</OutlinedTextField.Label>
          </OutlinedTextField>
          <OutlinedTextField.SupportingText>
            This will be how other users know you.
          </OutlinedTextField.SupportingText>
        </div>
      </div>
    </div>
  )
}

export const OutlinedTextFieldWithLeadingIcon = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextField>
          <OutlinedTextField.Decoration>
            <Icon symbol="person" />
          </OutlinedTextField.Decoration>
          <OutlinedTextField.Input />
          <OutlinedTextField.Label>Username</OutlinedTextField.Label>
        </OutlinedTextField>
      </div>
    </div>
  )
}

export const OutlinedTextFieldWithTrailingIcon = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextField>
          <OutlinedTextField.Input placeholder="Search..." />
          <OutlinedTextField.Decoration>
            <Icon symbol="search" />
          </OutlinedTextField.Decoration>
        </OutlinedTextField>
      </div>
    </div>
  )
}

export const OutlinedTextFieldDisabled = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextField>
          <OutlinedTextField.Input disabled />
          <OutlinedTextField.Label>Username</OutlinedTextField.Label>
        </OutlinedTextField>
      </div>
    </div>
  )
}

export const OutlinedTextFieldWithError = () => {
  return (
    <div className="flex-center w-full rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <OutlinedTextField error>
            <OutlinedTextField.Input />
            <OutlinedTextField.Label>Username</OutlinedTextField.Label>
          </OutlinedTextField>
          <OutlinedTextField.SupportingText className="text-error">
            The username can not be empty.
          </OutlinedTextField.SupportingText>
        </div>
      </div>
    </div>
  )
}
