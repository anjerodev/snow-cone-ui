import { FilledSelect, OutlinedSelect } from '@/components/ui/select'

const MenuItems = () => (
  <FilledSelect.Content>
    <FilledSelect.Group>
      <FilledSelect.Subheader>Andalucía</FilledSelect.Subheader>
      <FilledSelect.Item value="almeria">Almería</FilledSelect.Item>
      <FilledSelect.Item value="cadiz">Cádiz</FilledSelect.Item>
      <FilledSelect.Item value="cordoba">Córdoba</FilledSelect.Item>
      <FilledSelect.Item value="granada">Granada</FilledSelect.Item>
      <FilledSelect.Item value="huelva">Huelva</FilledSelect.Item>
      <FilledSelect.Item value="jaen">Jaén</FilledSelect.Item>
      <FilledSelect.Item value="malaga">Málaga</FilledSelect.Item>
      <FilledSelect.Item value="sevilla">Sevilla</FilledSelect.Item>
    </FilledSelect.Group>
  </FilledSelect.Content>
)

/**
 * Filled Select examples
 */

export const FilledSelectDefault = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <FilledSelect>
          <FilledSelect.Trigger>
            <FilledSelect.Value placeholder="Select a city" />
          </FilledSelect.Trigger>
          <MenuItems />
        </FilledSelect>
      </div>
    </div>
  )
}

export const FilledSelectWithLabel = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <FilledSelect>
          <FilledSelect.Trigger>
            <FilledSelect.Value placeholder="Select a city" />
            <FilledSelect.Label>City</FilledSelect.Label>
          </FilledSelect.Trigger>
          <MenuItems />
        </FilledSelect>
      </div>
    </div>
  )
}

export const FilledSelectWithError = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <FilledSelect>
          <FilledSelect.Trigger error>
            <FilledSelect.Value placeholder="Select a city" />
            <FilledSelect.Label>City</FilledSelect.Label>
          </FilledSelect.Trigger>
          <MenuItems />
        </FilledSelect>
      </div>
    </div>
  )
}

export const FilledSelectDisabled = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <FilledSelect value="cordoba">
          <FilledSelect.Trigger disabled>
            <FilledSelect.Value placeholder="Select a city" />
            <FilledSelect.Label>City</FilledSelect.Label>
          </FilledSelect.Trigger>
          <MenuItems />
        </FilledSelect>
      </div>
    </div>
  )
}

/**
 * Outlined select examples
 */

export const OutlinedSelectDefault = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <OutlinedSelect>
          <OutlinedSelect.Trigger>
            <OutlinedSelect.Value placeholder="Select a city" />
          </OutlinedSelect.Trigger>
          <MenuItems />
        </OutlinedSelect>
      </div>
    </div>
  )
}

export const OutlinedSelectWithLabel = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <OutlinedSelect>
          <OutlinedSelect.Trigger>
            <OutlinedSelect.Value placeholder="Select a city" />
            <OutlinedSelect.Label>City</OutlinedSelect.Label>
          </OutlinedSelect.Trigger>
          <MenuItems />
        </OutlinedSelect>
      </div>
    </div>
  )
}

export const OutlinedSelectWithError = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <OutlinedSelect>
          <OutlinedSelect.Trigger error>
            <OutlinedSelect.Value placeholder="Select a city" />
            <OutlinedSelect.Label>City</OutlinedSelect.Label>
          </OutlinedSelect.Trigger>
          <MenuItems />
        </OutlinedSelect>
      </div>
    </div>
  )
}

export const OutlinedSelectDisabled = () => {
  return (
    <div className="flex-center w-full gap-6 rounded-md bg-background p-4">
      <div className="w-full max-w-sm">
        <OutlinedSelect value="cordoba">
          <OutlinedSelect.Trigger disabled>
            <OutlinedSelect.Value placeholder="Select a city" />
            <OutlinedSelect.Label>City</OutlinedSelect.Label>
          </OutlinedSelect.Trigger>
          <MenuItems />
        </OutlinedSelect>
      </div>
    </div>
  )
}
