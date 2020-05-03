import blogService from '../services/blogs'
const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'CREATE_BLOG':
      return state.concat(action.data)
    case 'LIKE_BLOG':
      return state.map(blog => blog.id === action.data.id ? action.data : blog)
    case 'DELETE_BLOG':
      return state.filter(blog => blog.id !== action.data)
    case 'COMMENT_BLOG':
      return state.map(blog => blog.id === action.data.id ? action.data : blog)
    default:
      return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = blogObject => {
  return async dispatch => {
    const newBlog = await blogService.create(blogObject)
    dispatch({
      type: 'CREATE_BLOG',
      data: newBlog
    })
  }
}

export const likeBlog = blogObject => {
  return async dispatch => {
    const changedBlog = { ...blogObject, likes: blogObject.likes + 1 }
    const updatedBlog = await blogService.update(changedBlog)
    dispatch({
      type: 'LIKE_BLOG',
      data: updatedBlog
    })
  }
}

export const removeBlog = blogObject => {
  return async dispatch => {
    const { id } = blogObject
    await blogService.remove(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id
    })
  }
}

export const commentBlog = (id, comment) => {
  return async dispatch => {
    const blog = await blogService.comment(id, comment)
    dispatch({
      type: 'COMMENT_BLOG',
      data: blog
    })
  }
}

export default reducer
