import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import blogReducer from './blogReducer'
import loginReducer from  './loginReducer'
import notificationReducer from './notificationReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  loggedUser: loginReducer,
  users: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
