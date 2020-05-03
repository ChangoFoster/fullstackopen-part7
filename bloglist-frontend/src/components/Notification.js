import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {
  const message = useSelector(state => state.notification.message)

  const alert = () => (<Alert severity={message.type}>{message.text}</Alert>)

  if(message === null) {
    return null
  } else {
    return <div>{message && alert()}</div>
  }
}

export default Notification
