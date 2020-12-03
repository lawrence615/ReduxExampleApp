export const ADD_FRIEND = 'ADD_FRIEND'

export const friendAdd = (friendsIndex) => {
  return { type: ADD_FRIEND, payload: friendsIndex }
}