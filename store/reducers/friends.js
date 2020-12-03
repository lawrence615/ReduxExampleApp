import { combineReducers } from 'redux'
import { ADD_FRIEND } from '../types'

const initialState = {
  currentFriends: [],
  possibleFriends: ['Alice', 'Bob', 'Sammy']
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const addedFriendIndex = action.payload

      // pulls current and possible out of the previous state
      // we do not want to alter state directly in case another action is altering it  at the same time
      const { currentFriends, possibleFriends } = state

      // pull friend out of friends.possible
      // note that action.payload === friendIndex
      const addedFriend = possibleFriends.splice(addedFriendIndex, 1)

      // and put friend in friends.current
      currentFriends.push(addedFriend)

      // finally, update the redux state
      const newState = { currentFriends, possibleFriends }

      // return newState
      return { ...state, newState }

    default:
      return state
  }
}


export default friendsReducer
