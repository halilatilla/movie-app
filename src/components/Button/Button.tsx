import { FC } from 'react'
import classnames from 'classnames'

interface Props {
  label?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: FC<Props> = ({ label, onClick, className, children, disabled, ...rest }) => {
  return (
    <button
      className={classnames(
        'h-[42px] text-sm font-medium rounded-lg border hover:bg-gray-700 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:select-none disabled:opacity-50 disabled:hover:bg-transparent',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label} {children}
    </button>
  )
}

export default Button
