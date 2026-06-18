import React from 'react'

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: Array<{ value: string; label: string }>
}

export function SelectField({
  label,
  error,
  options,
  id,
  ...props
}: SelectFieldProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <select
        {...props}
        id={selectId}
        className={`input-field cursor-pointer ${
          error ? 'border-danger focus:ring-danger' : ''
        } ${props.className || ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="text-xs text-danger font-medium">
          {error}
        </p>
      )}
    </div>
  )
}
