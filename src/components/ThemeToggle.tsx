import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title={`Mudar para tema ${mode === 'dark' ? 'claro' : 'escuro'}`}
      className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shadow-sm hover:scale-105 transform"
    >
      {mode === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}
