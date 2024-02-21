import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Menu } from '@/components/ui/menu'

const fontWeightsValues = [100, 200, 300, 400, 500, 600, 700]

export const MenuExample = () => {
  const [lineSpacing, setLineSpacing] = useState('single')
  const [fontWeights, setFontWeights] = useState(fontWeightsValues)

  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button variant="outlined">Open menu</Button>
      </Menu.Trigger>
      <Menu.Content compact className="w-64">
        <Menu.Group>
          <Menu.MenuItem>
            <Icon symbol="format_bold" />
            <span>Bold</span>
            <Menu.Shortcut>⌘B</Menu.Shortcut>
          </Menu.MenuItem>
          <Menu.MenuItem>
            <Icon symbol="format_italic" />
            <span>Italic</span>
            <Menu.Shortcut>⌘I</Menu.Shortcut>
          </Menu.MenuItem>
          <Menu.MenuItem>
            <Icon symbol="format_underlined" />
            <span>Underline</span>
            <Menu.Shortcut>⌘U</Menu.Shortcut>
          </Menu.MenuItem>
          <Menu.MenuItem>
            <Icon symbol="format_strikethrough" />
            <span>Strikethrough</span>
            <Menu.Shortcut>⌘+Shift+X</Menu.Shortcut>
          </Menu.MenuItem>
        </Menu.Group>

        <Menu.Divider />

        <Menu.Group>
          <Menu.SubMenu>
            <Menu.SubTrigger>
              <span>Line spacing</span>
            </Menu.SubTrigger>
            <Menu.Portal>
              <Menu.SubContent compact>
                <Menu.RadioGroup
                  value={lineSpacing}
                  onValueChange={setLineSpacing}
                >
                  <Menu.RadioItem
                    value="single"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <span>Single</span>
                  </Menu.RadioItem>
                  <Menu.RadioItem
                    value="1.15"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <span>1.15</span>
                  </Menu.RadioItem>
                  <Menu.RadioItem
                    value="double"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <span>Double</span>
                  </Menu.RadioItem>
                  <Menu.RadioItem
                    value="custom"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <span>Custom: 1.2</span>
                  </Menu.RadioItem>
                </Menu.RadioGroup>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.MenuItem>
                    <span>Add space before paragraph</span>
                  </Menu.MenuItem>
                  <Menu.MenuItem>
                    <span>Add space after paragraph</span>
                  </Menu.MenuItem>
                </Menu.Group>
                <Menu.Divider />
                <Menu.MenuItem>
                  <span>Custom spacing...</span>
                </Menu.MenuItem>
              </Menu.SubContent>
            </Menu.Portal>
          </Menu.SubMenu>

          <Menu.SubMenu>
            <Menu.SubTrigger>
              <span>Font weights</span>
            </Menu.SubTrigger>
            <Menu.Portal>
              <Menu.SubContent compact>
                <Menu.Group>
                  {fontWeightsValues.map((v) => (
                    <Menu.CheckBoxItem
                      key={v}
                      checked={fontWeights.includes(v)}
                      onCheckedChange={(checked) => {
                        if (!checked) {
                          setFontWeights((prev) => prev.filter((w) => w !== v))
                        } else {
                          setFontWeights((prev) => [...prev, v])
                        }
                      }}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <span>{v}</span>
                    </Menu.CheckBoxItem>
                  ))}
                </Menu.Group>
              </Menu.SubContent>
            </Menu.Portal>
          </Menu.SubMenu>
        </Menu.Group>

        <Menu.Divider />

        <Menu.Group>
          <Menu.MenuItem>
            <span>Undo</span>
          </Menu.MenuItem>
          <Menu.MenuItem disabled>
            <span>Redo</span>
          </Menu.MenuItem>
        </Menu.Group>
      </Menu.Content>
    </Menu>
  )
}
