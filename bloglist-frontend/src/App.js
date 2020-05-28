import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useRouteMatch } from "react-router-dom"
import Container from '@material-ui/core/Container'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Nav from './components/Nav'
import Togglable from './components/Togglable'
import User from './components/User'
import Users from './components/Users'
import { initializeBlogs } from './reducers/blogReducer'
import { checkLogin } from './reducers/loginReducer'
import { initializeUsers } from './reducers/userReducer'
import './App.css'

//TODO: Commented out hook code in bloglist frontend hooks/index.js
//TODO: hooks folder in country-hook?

const App = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.loggedUser)

  const blogs = useSelector(state => state.blogs
    .sort((prev, curr) => curr.likes - prev.likes))
  const blogMatch = useRouteMatch('/blogs/:id')
  const blog = blogMatch ?
    blogs.find(blog => blog.id === blogMatch.params.id) : null

  const users = useSelector(state => state.users)
  const userMatch = useRouteMatch('/users/:id')
  const user = userMatch ?
    users.find(user => user.id === userMatch.params.id) : null

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(checkLogin())
    dispatch(initializeUsers())
  }, [dispatch])

  const loginForm = () => (
    <Togglable buttonLabel='Login'>
      <LoginForm />
    </Togglable>
  )

  const blogFormRef = React.createRef()

  const blogForm = () => (
    <Togglable buttonLabel='New blog' ref={blogFormRef}>
      <BlogForm />
    </Togglable>
  )

  return (
    <Container>
      <Nav />
      <Switch>
        <Route path='/blogs/:id'>
          <Blog blog={blog} />
        </Route>
        <Route path="/users/:id">
          <User user={user} />
        </Route>
        <Route path='/blogs'>
          <Blogs blogs={blogs} />
        </Route>
        <Route path="/users">
          <Users users={users} />
        </Route>
        <Route path="/">
          { loggedUser === null ? loginForm() : blogForm() }
        </Route>
      </Switch>
    </Container>
  )
}

export default App
