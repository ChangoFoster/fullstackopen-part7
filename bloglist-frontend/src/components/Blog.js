import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useField } from '../hooks'
import { likeBlog, removeBlog, commentBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  TextField,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
})

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const loggedUser = useSelector(state => state.loggedUser)
  const [comment, resetComment] = useField('comment', 'text')
  const classes = useStyles()

  const updateBlog = event => {
    event.preventDefault()
    try {
      dispatch(likeBlog(blog))
      dispatch(notify(`${blog.title} was liked `, 'success'))
    } catch (error) {
      console.log(error)
      dispatch(notify('Something wrong with your blog', 'error'))
    }
  }

  const deleteBlog = event => {
    event.preventDefault()
    const result = window.confirm(`Do you want to delete ${blog.title}?`)
    if (result) {
      try {
        dispatch(removeBlog(blog))
        dispatch(notify(`${blog.title} was removed`, 'success'))
        history.push('/blogs')
      } catch (error) {
        console.log(error)
        dispatch(notify('Something went wrong deleting your blog', 'error'))
      }
    }
  }

  const addComment = event => {
    event.preventDefault()
    try {
      dispatch(commentBlog(blog.id, comment.value))
      dispatch(notify(`${comment.value} was add`, 'success'))
      resetComment()
    } catch (error) {
      console.log(error)
      dispatch(notify('Something went wrong commenting on your blog', 'error'))
    }
  }

  const deleteButton = () => (
    <Button color="secondary" onClick={deleteBlog} variant="contained">
      Delete post
    </Button>
  )

  if(!blog) {
    return null
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography component="h4" variant="h4">
          {blog.title} {blog.author}
        </Typography>
        <Typography component="h5" variant="h6">
          URL:
          <Link
            component="a"
            href={`http://${blog.url}`}
            rel="noopener noreferrer"
            target="_blank">
            {blog.url}
          </Link>
        </Typography>
        <Typography component="h5" variant="h6">
          Likes: <span className="blog-like">{blog.likes}</span>
        </Typography>
        <Typography component="h5" variant="h6">
          Name: {blog.user.name}
        </Typography>
        <Typography component="h5" variant="h6">
          Comments: {blog.comments.map((comment, idx) => <li key={idx}>{comment}</li>)}
        </Typography>
      </CardContent>
      <CardActions>
        <TextField { ...comment } variant="outlined" />
        <Button color="default" onClick={addComment} variant="contained">
          Comment
        </Button>
        <Button color="primary" onClick={updateBlog} variant="contained">
          Like
        </Button>
        {loggedUser !== null
          && loggedUser.username === blog.user.username
          && deleteButton()}
      </CardActions>
    </Card>
  )
}

export default Blog
