import React from 'react'
import { Link } from "react-router-dom"
import Notification from './Notification'
import UserInfo from './UserInfo'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Notification />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to='/blogs'>
            Blogs
          </Button>
          <Button color="inherit" component={Link} to='/users'>
            Users
          </Button>
          <UserInfo />
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h4">Blogs</Typography>
    </div>
  )
}

export default Nav
