import { useState } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/Header'
import { ClockPage } from '@/pages/ClockPage'

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'clock' | 'financeiro'>('financeiro')

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-4">
          <button
            onClick={() => setCurrentPage('financeiro')}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              currentPage === 'financeiro'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-200'
            }`}
          >
            💰 Educador Financeiro
          </button>
          <button
            onClick={() => setCurrentPage('clock')}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              currentPage === 'clock'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-200'
            }`}
          >
            ⏰ Relógio Mundial
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {currentPage === 'clock' ? (
          <ClockPage />
        ) : (
          <div className="py-8 px-4 w-full max-w-4xl mx-auto">
            {/* Original Financeiro Content */}
            <div className="rounded-xl p-6 shadow-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 transition-all">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
                Página do Educador Financeiro
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 border-t border-gray-100 dark:border-slate-800 text-xs text-center text-gray-400">
        © {new Date().getFullYear()} Educador Financeiro + Relógio Mundial • Desenvolvido com
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
