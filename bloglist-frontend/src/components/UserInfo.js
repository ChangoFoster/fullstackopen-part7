import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { notify } from '../reducers/notificationReducer'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}))

const UserInfo = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.loggedUser)
  const classes = useStyles()

  const submitLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
    dispatch(notify(`${loggedUser.name} logged out`, 'success'))
  }

  if (!loggedUser) {
    return null
  }

  return(
    <div className={classes.root}>
      <em>{loggedUser.name} is logged in</em>
      <Button color="secondary" onClick={submitLogout} variant="contained">
        Log out
      </Button>
    </div>
  )
}

export default UserInfo
