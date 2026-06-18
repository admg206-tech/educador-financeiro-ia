interface ProgressBarProps {
  current: number
  total: number
  label?: string
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const progress = Math.round(((current + 1) / total) * 100)

  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {label && (
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {label} ({current + 1}/{total})
        </p>
      )}
    </div>
  )
}
