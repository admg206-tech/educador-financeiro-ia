import React from 'react'

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

export function InputField({
  label,
  error,
  hint,
  id,
  ...props
}: InputFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        className={`input-field ${
          error ? 'border-danger focus:ring-danger' : ''
        } ${props.className || ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-danger font-medium">
          {error}
        </p>
      )}
      {hint && (
        <p id={`${inputId}-hint`} className="text-xs text-gray-500 dark:text-gray-400">
          {hint}
        </p>
      )}
    </div>
  )
}
