import { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import { useRouteMatch } from "react-router-dom"

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

/*
const useResource = (baseUrl) => {
  const resource = null

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {setResources(response.data)})
  }, [baseUrl])


  const service = {
    create
  }

  return [
    resources, service
  ]
}
*/
