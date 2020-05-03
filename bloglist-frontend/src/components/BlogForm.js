import React from 'react'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks'
import { createBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
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

const BlogForm = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [author, resetAuthor] = useField('Author', 'text')
  const [likes, resetLikes] = useField('Likes', 'number', 0)
  const [title, resetTitle] = useField('Title', 'text')
  const [url, resetUrl] = useField('Url', 'text')

  const addBlog = event => {
    event.preventDefault()
    try {
      dispatch(createBlog({
        author: author.value,
        likes: likes.value,
        title: title.value,
        url: url.value
      }))
      dispatch(notify(`a new blog ${title.value} was added`, 'success'))
      resetAuthor()
      resetLikes(0)
      resetTitle()
      resetUrl()
    } catch (error) {
      console.log(error)
      dispatch(notify('Something wrong with your blog', 'error'))
    }
  }

  return (
    <div>
      <Typography component="h2" variant="h5">Add a blog</Typography>
      <form className={classes.root} onSubmit={addBlog}>
        <TextField {...author} variant="outlined" />
        <TextField {...likes} variant="outlined" />
        <TextField {...title} variant="outlined" />
        <TextField {...url} variant="outlined" />
        <Button
          color="primary"
          id="new-blog-button"
          type='submit'
          variant="contained">
          Add blog
        </Button>
      </form>
    </div>
  )
}

export default BlogForm
