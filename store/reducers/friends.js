import { combineReducers } from 'redux'

const initialState = {
  current: [],
  possible: [
    'Alice',
    'Bob',
    'Sammy'
  ]
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':

      // pulls current and possible out of the previous state
      // we do not want to alter state directly in case another action is altering it  at the same time
      const { current, possible } = state

      // pull friend out of friends.possible
      // note that action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1)

      // and put friend in friends.current
      current.push(addedFriend)

      // finally, update the redux state
      const newState = { current, possible }

      return newState

    default:
      return state
  }
}


export default friendsReducer
