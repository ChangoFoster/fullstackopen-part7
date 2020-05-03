import blogService from '../services/blogs'
import loginService from '../services/login'
const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT_USER':
      return action.data
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return initialState
    case 'SET_TOKEN':
      return state
    default:
      return state
  }
}

export const checkLogin = () => {
  return async dispatch => {
    let user = null
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      user = JSON.parse(loggedUserJSON)
      dispatch(setToken(user.token))
    }
    dispatch({
      type: 'INIT_USER',
      data: user
    })
  }
}

export const login = credentials => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    dispatch(setToken(user.token))
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const setToken = token => {
  return async dispatch => {
    await blogService.setToken(token)
    dispatch({
      type: 'SET_TOKEN'
    })
  }
}

export default reducer
