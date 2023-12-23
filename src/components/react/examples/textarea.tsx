import { FilledTextarea, OutlinedTextarea } from '@/components/ui/textarea'

/**
 * Filled textarea
 */

export const FilledTextAreaDefault = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextarea>
          <FilledTextarea.Input placeholder="Write a description about your project." />
        </FilledTextarea>
      </div>
    </div>
  )
}

export const FilledTextareaWithLabel = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextarea>
          <FilledTextarea.Input placeholder="Write a description about your project." />
          <FilledTextarea.Label>Description</FilledTextarea.Label>
        </FilledTextarea>
      </div>
    </div>
  )
}

export const FilledTextareaWithSupportingText = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <FilledTextarea>
            <FilledTextarea.Input placeholder="Write a description about your project." />
            <FilledTextarea.Label>Description</FilledTextarea.Label>
          </FilledTextarea>
          <FilledTextarea.SupportingText>
            This is the description of your project.
          </FilledTextarea.SupportingText>
        </div>
      </div>
    </div>
  )
}

export const FilledTextareaDisabled = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <FilledTextarea>
          <FilledTextarea.Input
            disabled
            placeholder="Write a description about your project."
          />
          <FilledTextarea.Label>Description</FilledTextarea.Label>
        </FilledTextarea>
      </div>
    </div>
  )
}

/**
 * Outlined textarea
 */

export const OutlinedTextAreaDefault = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextarea>
          <OutlinedTextarea.Input placeholder="Write a description about your project." />
        </OutlinedTextarea>
      </div>
    </div>
  )
}

export const OutlinedTextareaWithLabel = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextarea>
          <OutlinedTextarea.Input placeholder="Write a description about your project." />
          <OutlinedTextarea.Label>Description</OutlinedTextarea.Label>
        </OutlinedTextarea>
      </div>
    </div>
  )
}

export const OutlinedTextareaWithSupportingText = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <div className="w-full">
          <OutlinedTextarea>
            <OutlinedTextarea.Input placeholder="Write a description about your project." />
            <OutlinedTextarea.Label>Description</OutlinedTextarea.Label>
          </OutlinedTextarea>
          <OutlinedTextarea.SupportingText>
            This is the description of your project.
          </OutlinedTextarea.SupportingText>
        </div>
      </div>
    </div>
  )
}

export const OutlinedTextareaDisabled = () => {
  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <div className="flex-center w-full max-w-sm">
        <OutlinedTextarea>
          <OutlinedTextarea.Input
            disabled
            placeholder="Write a description about your project."
          />
          <OutlinedTextarea.Label>Description</OutlinedTextarea.Label>
        </OutlinedTextarea>
      </div>
    </div>
  )
}
