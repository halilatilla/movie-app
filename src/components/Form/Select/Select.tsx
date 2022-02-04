import { FC } from 'react'

interface Props {
  label?: string
  options?: string[]
  placeholder?: string
  className?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<Props> = ({ label, options, ...rest }) => {
  return (
    <label className="block">
      {label && <span className="text-gray-300 capitalize text-sm">{label}</span>}

      <select
        className="text-gray-900 block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        {...rest}
      >
        {options &&
          options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
      </select>
    </label>
  )
}

export default Select
