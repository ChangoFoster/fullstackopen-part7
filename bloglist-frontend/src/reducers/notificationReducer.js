const initialState = { message: null, id: 0 }
const defaultTimeout = 5000

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW':
      return { ...state, message: action.data }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

let timerid

export const notify = (notification, type, timeout = defaultTimeout) => {
  return async dispatch => {
    dispatch({
      type: 'NEW',
      data: {text: notification, type: type}
    })
    if(timerid) {
      clearTimeout(timerid)
    }
    const startTimer = () => {
      timerid = setTimeout(() => { dispatch(resetNotification()) }, timeout)
    }
    startTimer()
  }
}

export const resetNotification = () => {
  return async dispatch =>
    dispatch({
      type: 'RESET'
    })
}

export default reducer
