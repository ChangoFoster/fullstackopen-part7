import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {
  const message = useSelector(state => state.notification.message)

  if(message === null) {
    return null
  }

  return (
    <div>
      {message && <Alert severity={message.type}>{message.text}</Alert>}
    </div>
  )
}

export default Notification
