import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger:
    'px-4 py-2 rounded-md bg-danger text-white font-semibold hover:bg-danger-dark transition-all shadow-md',
  success:
    'px-4 py-2 rounded-md bg-success text-white font-semibold hover:bg-success-dark transition-all shadow-md',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${props.className || ''}`}
    >
      {loading ? (
        <>
          <span className="inline-block mr-2 animate-spin">⏳</span>
          Processando...
        </>
      ) : (
        children
      )}
    </button>
  )
}
