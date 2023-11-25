import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'

export const ThemeToggle = () => {
  function toggleTheme() {
    const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)

    const isDarkMode = newTheme === 'dark'

    document.documentElement.classList.toggle('dark', isDarkMode)
    document.documentElement.classList.toggle('light', !isDarkMode)
  }

  return (
    <IconButton variant="outlined" onClick={toggleTheme}>
      <Icon
        symbol="dark_mode"
        className="block animate-in zoom-in-50 spin-in-45 group-hover:font-emphasis dark:hidden"
      />
      <Icon
        symbol="light_mode"
        className="hidden animate-in zoom-in-50 spin-in-45 group-hover:font-emphasis dark:block"
      />
    </IconButton>
  )
}
