import React from 'react'
import { Link } from "react-router-dom"
import { Button, ListItem, ListItemText, Typography } from '@material-ui/core'

const User = ({ user }) => {

  if(!user){
    return null
  }

  if(user.blogs.length === 0) {
    return(
      <div>
        <Typography component="h2" variant="h5">
          {`No blogs by ${user.name} yet`}
        </Typography>
        <Button color="default" component={Link} to="/users" variant="contained">
          Back
        </Button>
      </div>
    )
  } else {
    return(
      <div>
        <Typography component="h2" variant="h5">
          {`${user.name}'s blogs`}
        </Typography>
        <ul>
          {user.blogs.map(({id, title}) =>
            <ListItem key={id} component={Link} to={`/blogs/${id}`}>
              <ListItemText primary={title} />
            </ListItem>
          )}
        </ul>
        <Button color="default" component={Link} to="/users" variant="contained">
          Back
        </Button>
      </div>
    )
  }
}

export default User
