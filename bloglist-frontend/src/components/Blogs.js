import React from 'react'
import { Link } from "react-router-dom"
import { ListItem, ListItemText, Typography } from '@material-ui/core'

const Blogs = ({ blogs }) => {

  return(
    <div>
      <Typography component="h2" variant="h5">List of blogs</Typography>
      <div className="blog-list">
        <ul>
          {blogs.map(({id, title}) =>
            <ListItem key={id} component={Link} to={`/blogs/${id}`}>
              <ListItemText primary={title} />
            </ListItem>
          )}
          </ul>
      </div>
    </div>
  )
}

export default Blogs
