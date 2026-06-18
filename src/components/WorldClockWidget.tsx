import { useState } from 'react'
import { useMultipleTimeZones } from '@/hooks'
import { Card, Button } from '@/components'

interface WorldClockWidgetProps {
  compact?: boolean
}

export function WorldClockWidget({ compact = false }: WorldClockWidgetProps) {
  const defaultTimezones = ['America/Sao_Paulo', 'UTC', 'Europe/London', 'Asia/Tokyo']
  const { times } = useMultipleTimeZones(defaultTimezones)

  if (compact) {
    return (
      <Card title="Relógio Mundial" emoji="⏰">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {times.map((timeData) => (
            <div key={timeData.timezone} className="text-center p-2">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {timeData.timezone}
              </p>
              <p className="font-mono text-lg font-bold text-primary mt-1">
                {timeData.time}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                {timeData.offset}
              </p>
            </div>
          ))}
        </div>
      </Card>
    )
  }

  return (
    <div className="rounded-lg bg-white dark:bg-slate-800 p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {times.map((timeData) => (
          <div
            key={timeData.timezone}
            className="p-4 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 border border-gray-200 dark:border-slate-600"
          >
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {timeData.timezone}
            </div>
            <div className="font-mono text-3xl font-bold text-primary">
              {timeData.time}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              {timeData.date}
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-500 mt-1">
              {timeData.offset}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
