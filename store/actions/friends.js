import { ADD_FRIEND } from '../types'

export const friendAdd = (friendsIndex) => {
  return { type: ADD_FRIEND, payload: friendsIndex }
}