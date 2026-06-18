import React from 'react'

interface CardProps {
  title: string
  emoji: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, emoji, children, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center gap-3 border-b pb-3 mb-4 dark:border-slate-700">
        <div className="text-2xl" role="img" aria-label={title}>
          {emoji}
        </div>
        <h3 className="font-bold text-lg text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
