import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="py-5 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label="Ícone de Dinheiro">
            💰
          </span>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Educador
            <span className="text-primary ml-1">Financeiro</span>
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
