import React from 'react'

interface DigitalClockProps {
  time: string
  timezone: string
  label: string
  date: string
  offset: string
  isActive?: boolean
}

export function DigitalClock({
  time,
  timezone,
  label,
  date,
  offset,
  isActive = false,
}: DigitalClockProps) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-br from-primary/20 to-primary/10 border-primary shadow-lg'
          : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700'
      }`}
    >
      <div className="text-center space-y-3">
        {/* Timezone Label */}
        <div className="flex items-center justify-center gap-2">
          <div className="text-2xl">🌍</div>
          <div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">
              {timezone}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
          </div>
        </div>

        {/* Time Display */}
        <div className="py-4">
          <div className="font-mono text-5xl font-black text-primary tracking-wider">
            {time}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {date}
          </div>
        </div>

        {/* Offset */}
        <div className="pt-3 border-t border-gray-200 dark:border-slate-700">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            {offset}
          </span>
        </div>
      </div>
    </div>
  )
}
