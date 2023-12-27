import type { Color, ColorsScheme } from '@/types/colors'
import type { ColorRoles } from '@/lib/colors/utils'
import { usePaletteStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import { useClipboard } from '@/hooks/use-clipboard'
import { Icon } from '@/components/ui/icon'

const tones = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  neutral: 'Neutral',
  neutralVariant: 'Neutral Variant',
  error: 'Error',
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
} as const

export const ColorsPalettes = () => {
  const {
    colors: { palettes, colorRoles },
    colorFormat,
  } = usePaletteStore()

  return (
    <section>
      <section className="mb-12">
        <h2>Color roles</h2>
        <h3 className="mb-2 mt-6 text-headline-md">Light Scheme</h3>
        <ColorRoles colors={colorRoles.light} colorFormat={colorFormat} />
        <h3 className="mb-2 mt-6 text-headline-md">Dark Scheme</h3>
        <ColorRoles colors={colorRoles.dark} colorFormat={colorFormat} />
        <h3 className="mb-2 mt-6 text-headline-md">Fixed</h3>
        <FixedColorsRole colors={colorRoles.fixed} colorFormat={colorFormat} />
      </section>

      <h2>Palette Tones</h2>
      {palettes &&
        Object.entries(palettes).map(([key, value]) => (
          <div key={key} className="w-full">
            <h3 className="mb-2 mt-6 text-headline-md">
              {tones[key as keyof typeof tones]}
            </h3>
            <div className="flex w-full flex-wrap py-2">
              {Object.entries(value).map(([key, value]) => (
                <ColorTone
                  key={key}
                  tone={key}
                  value={value}
                  format={colorFormat}
                />
              ))}
            </div>
          </div>
        ))}
    </section>
  )
}

const ColorRole = ({
  value,
  onValue,
  name,
  format,
  className,
}: {
  value: Color
  onValue: Color | string
  name: string
  format: keyof Color
  className?: string
}) => {
  const clipboard = useClipboard({ timeout: 1000 })

  return (
    <button
      onClick={() => clipboard.copy(value[format])}
      className={cn(
        'group h-16 w-full transition-[transform,border-radius,box-shadow] duration-0 hover:scale-105 hover:rounded-xs hover:shadow-sm hover:duration-200 active:scale-100 active:rounded-none active:shadow-none',
        className
      )}
      style={{
        backgroundColor: value.hex,
        color: typeof onValue == 'string' ? onValue : onValue?.hex,
      }}
    >
      <span className="flex-center relative h-full w-full">
        <span className="flex-center absolute inset-0 p-1 text-label-md duration-100 animate-in fade-in-0 zoom-in-50 group-hover:hidden sm:text-label-lg">
          {name}
        </span>
        <span className="group-hover:flex-center absolute inset-0 hidden">
          <Icon
            symbol="done"
            className={`text-body-lg duration-100 animate-in fade-in-0 zoom-in-50 ${
              clipboard.copied ? 'block' : 'hidden'
            }`}
          />
          <Icon
            symbol="content_copy"
            className={`text-body-lg duration-100 animate-in fade-in-0 zoom-in-50 ${
              clipboard.copied ? 'hidden' : 'block'
            }`}
          />
        </span>
      </span>
    </button>
  )
}

const DoubleColorRole = ({
  value,
  onValue,
  name,
  onName,
  format,
}: {
  value: Color
  onValue: Color
  name: string
  onName: string
  format: keyof Color
}) => {
  return (
    <div className="flex flex-col">
      <ColorRole value={value} onValue={onValue} name={name} format={format} />
      <ColorRole
        value={onValue}
        onValue={value}
        name={onName}
        format={format}
        className="h-10"
      />
    </div>
  )
}

const ColorTone = ({
  value,
  tone,
  format,
}: {
  value: Color
  tone: string
  format: keyof Color
}) => {
  const clipboard = useClipboard({ timeout: 1000 })

  return (
    <button
      onClick={() => clipboard.copy(value[format])}
      className={`group flex h-16 w-16 shrink-0 transition-[transform,border-radius,box-shadow] duration-0 hover:scale-110 hover:rounded-xs hover:shadow-sm hover:duration-200 active:scale-105 ${
        parseInt(tone) > 60 ? 'text-black' : 'text-white'
      }`}
      style={{ backgroundColor: value.hex }}
    >
      <span className="flex-center relative h-full w-full">
        <span className="text-label-lg animate-in fade-in-0 zoom-in-50 group-hover:hidden">
          {tone}
        </span>
        <span className="group-hover:flex-center absolute inset-0 hidden animate-in fade-in-0 zoom-in-50">
          <Icon
            symbol="done"
            className={`text-body-lg duration-100 animate-in fade-in-0 zoom-in-50 ${
              clipboard.copied ? 'block' : 'hidden'
            }`}
          />
          <Icon
            symbol="content_copy"
            className={`text-body-lg duration-100 animate-in fade-in-0 zoom-in-50 ${
              clipboard.copied ? 'hidden' : 'block'
            }`}
          />
        </span>
      </span>
    </button>
  )
}

const ColorRoles = ({
  colors,
  colorFormat,
}: {
  colors: Partial<Record<keyof ColorsScheme, Color>>
  colorFormat: keyof Color
}) => (
  <>
    <div className="mb-4 grid grid-cols-4 gap-4">
      <section className="col-span-3 grid grid-cols-3 gap-1">
        <DoubleColorRole
          name="Primary"
          onName="On Primary"
          value={colors.primary!}
          onValue={colors.onPrimary!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Secondary"
          onName="On Secondary"
          value={colors.secondary!}
          onValue={colors.onSecondary!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Tertiary"
          onName="On Tertiary"
          value={colors.tertiary!}
          onValue={colors.onTertiary!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Primary Container"
          onName="On Primary Container"
          value={colors.primaryContainer!}
          onValue={colors.onPrimaryContainer!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Secondary Container"
          onName="On Secondary Container"
          value={colors.secondaryContainer!}
          onValue={colors.onSecondaryContainer!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Tertiary Container"
          onName="On Tertiary Container"
          value={colors.tertiaryContainer!}
          onValue={colors.onTertiaryContainer!}
          format={colorFormat}
        />
      </section>
    </div>

    <div className="mb-4 grid grid-cols-4 gap-4">
      <section className="col-span-3 grid grid-cols-3 gap-1">
        <DoubleColorRole
          name="Success"
          onName="On Success"
          value={colors.success!}
          onValue={colors.onSuccess!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Info"
          onName="On Info"
          value={colors.info!}
          onValue={colors.onInfo!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Warning"
          onName="On Warning"
          value={colors.warning!}
          onValue={colors.onWarning!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Success Container"
          onName="On Success Container"
          value={colors.successContainer!}
          onValue={colors.onSuccessContainer!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Info Container"
          onName="On Info Container"
          value={colors.infoContainer!}
          onValue={colors.onInfoContainer!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Warning Container"
          onName="On Warning Container"
          value={colors.warningContainer!}
          onValue={colors.onWarningContainer!}
          format={colorFormat}
        />
      </section>
      <section className="grid grid-cols-1 gap-1">
        <DoubleColorRole
          name="Error"
          onName="On Error"
          value={colors.error!}
          onValue={colors.onError!}
          format={colorFormat}
        />
        <DoubleColorRole
          name="Error Container"
          onName="On Error Container"
          value={colors.errorContainer!}
          onValue={colors.onErrorContainer!}
          format={colorFormat}
        />
      </section>
    </div>

    <div className="grid grid-cols-4 gap-4">
      <section className="col-span-3 grid grid-cols-3 gap-1">
        <ColorRole
          value={colors.surfaceDim!}
          onValue={colors.onSurface!}
          name="Surface Dim"
          format={colorFormat}
        />
        <ColorRole
          value={colors.surface!}
          onValue={colors.onSurface!}
          name="Surface"
          format={colorFormat}
        />
        <ColorRole
          value={colors.surfaceBright!}
          onValue={colors.onSurface!}
          name="Surface Bright"
          format={colorFormat}
        />
        <section className="col-span-3 grid grid-cols-5">
          <ColorRole
            value={colors.surfaceContainerLowest!}
            onValue={colors.onSurface!}
            name="Surface Container Lowest"
            format={colorFormat}
          />
          <ColorRole
            value={colors.surfaceContainerLow!}
            onValue={colors.onSurface!}
            name="Surface Container Low"
            format={colorFormat}
          />
          <ColorRole
            value={colors.surfaceContainer!}
            onValue={colors.onSurface!}
            name="Surface Container"
            format={colorFormat}
          />
          <ColorRole
            value={colors.surfaceContainerHigh!}
            onValue={colors.onSurface!}
            name="Surface Container High"
            format={colorFormat}
          />
          <ColorRole
            value={colors.surfaceContainerHighest!}
            onValue={colors.onSurface!}
            name="Surface Container Highest"
            format={colorFormat}
          />
        </section>
        <section className="col-span-3 grid grid-cols-4">
          <ColorRole
            value={colors.onSurface!}
            onValue={colors.surface!}
            name="On Surface"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.onSurfaceVariant!}
            onValue={colors.surface!}
            name="On Surface Variant"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.outline!}
            onValue={colors.surface!}
            name="Outline"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.outlineVariant!}
            onValue={colors.onSurface!}
            name="Outline Variant"
            format={colorFormat}
            className="h-10"
          />
        </section>
      </section>
      <section className="grid">
        <div className="flex flex-col">
          <ColorRole
            value={colors.inverseSurface!}
            onValue={colors.surface!}
            name="Inverse Surface"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.inverseOnSurface!}
            onValue={colors.onSurface!}
            name="Inverse On Surface"
            format={colorFormat}
            className="h-10"
          />
        </div>
        <ColorRole
          value={colors.inversePrimary!}
          onValue={colors.onPrimaryContainer!}
          name="Inverse Primary"
          format={colorFormat}
          className="h-10"
        />
        <div className="grid grid-cols-2 items-end gap-1">
          <ColorRole
            value={colors.scrim!}
            onValue={'#fff'}
            name="Scrim"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.shadow!}
            onValue={'#fff'}
            name="Shadow"
            format={colorFormat}
            className="h-10"
          />
        </div>
      </section>
    </div>
  </>
)

const FixedColorsRole = ({
  colors,
  colorFormat,
}: {
  colors: Partial<Record<keyof ColorsScheme, Color>>
  colorFormat: keyof Color
}) => {
  return (
    <div className="mb-4 grid grid-cols-4 gap-4">
      <section className="col-span-3 grid grid-cols-3 gap-1">
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <ColorRole
              value={colors.primaryFixed!}
              onValue={colors.onPrimaryFixed!}
              name="Primary Fixed"
              format={colorFormat}
            />
            <ColorRole
              value={colors.primaryFixedDim!}
              onValue={colors.onPrimaryFixed!}
              name="Primary Fixed Dim"
              format={colorFormat}
            />
          </div>
          <ColorRole
            value={colors.onPrimaryFixed!}
            onValue={colors.primaryFixed!}
            name="On Primary Fixed"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.onPrimaryFixedVariant!}
            onValue={colors.primaryFixed!}
            name="On Primary Fixed Variant"
            format={colorFormat}
            className="h-10"
          />
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <ColorRole
              value={colors.secondaryFixed!}
              onValue={colors.onSecondaryFixed!}
              name="Secondary Fixed"
              format={colorFormat}
            />
            <ColorRole
              value={colors.secondaryFixedDim!}
              onValue={colors.onSecondaryFixed!}
              name="Secondary Fixed Dim"
              format={colorFormat}
            />
          </div>
          <ColorRole
            value={colors.onSecondaryFixed!}
            onValue={colors.secondaryFixed!}
            name="On Secondary Fixed"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.onSecondaryFixedVariant!}
            onValue={colors.secondaryFixed!}
            name="On Secondary Fixed Variant"
            format={colorFormat}
            className="h-10"
          />
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <ColorRole
              value={colors.tertiaryFixed!}
              onValue={colors.onTertiaryFixed!}
              name="Tertiary Fixed"
              format={colorFormat}
            />
            <ColorRole
              value={colors.tertiaryFixedDim!}
              onValue={colors.onTertiaryFixed!}
              name="Tertiary Fixed Dim"
              format={colorFormat}
            />
          </div>
          <ColorRole
            value={colors.onTertiaryFixed!}
            onValue={colors.tertiaryFixed!}
            name="On Tertiary Fixed"
            format={colorFormat}
            className="h-10"
          />
          <ColorRole
            value={colors.onTertiaryFixedVariant!}
            onValue={colors.tertiaryFixed!}
            name="On Tertiary Fixed Variant"
            format={colorFormat}
            className="h-10"
          />
        </div>
      </section>
    </div>
  )
}
