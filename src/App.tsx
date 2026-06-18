import { useState } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/Header'
import { MultiStepForm } from '@/features/form/MultiStepForm'
import { ApiKeyInput } from '@/features/api/ApiKeyInput'

function AppContent() {
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('gemini_key') || ''
  })

  const handleApiKeyChange = (key: string) => {
    setApiKey(key)
    localStorage.setItem('gemini_key', key)
  }

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />

      <main className="flex-1 py-8 px-4 w-full max-w-4xl mx-auto">
        <ApiKeyInput value={apiKey} onChange={handleApiKeyChange} />

        <div className="rounded-xl p-6 shadow-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 transition-all">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
            Preencha o simulador assistido passo a passo para mapearmos seu ecossistema
            financeiro atual.
          </p>
          <MultiStepForm apiKey={apiKey} />
        </div>
      </main>

      <footer className="py-6 border-t border-gray-100 dark:border-slate-800 text-xs text-center text-gray-400">
        © {new Date().getFullYear()} Educador Financeiro Inteligente • Desenvolvido com
        React + TypeScript + Google Gemini
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
