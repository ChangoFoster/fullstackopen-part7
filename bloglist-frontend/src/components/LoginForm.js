import React from 'react'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks'
import { notify } from '../reducers/notificationReducer'
import { login } from '../reducers/loginReducer'
import { Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
      display: 'flex',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
}))

const LoginForm = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [username, resetUsername] = useField('username', 'text')
  const [password, resetPassword] = useField('password', 'password')

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(login({ username: username.value, password: password.value }))
      dispatch(notify(`${username.value} logged in`, 'success'))
      resetUsername()
      resetPassword()
    } catch (error) {
      console.log(error)
      dispatch(notify('Wrong username or password', 'error'))
    }
  }

  return (
    <div>
      <Typography component="h2" variant="h5">Login</Typography>
      <form className={classes.root} onSubmit={onSubmit}>
        <TextField {...username} variant="outlined" />
        <TextField {...password} variant="outlined" />
        <Button
          color="primary"
          id="login-button"
          type="submit"
          variant="contained">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
