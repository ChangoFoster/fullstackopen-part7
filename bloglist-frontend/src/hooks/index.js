import { useState } from 'react'

export const useField = (name, type, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)
  const label = name

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = (resetValue = '') => setValue(resetValue)

  return [{
    label,
    name,
    type,
    value,
    onChange
  }, reset ]
}
