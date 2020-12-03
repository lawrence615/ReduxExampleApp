import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import AppNavigator from './navigation/AppNavigation'
import FriendsReducer from './store/reducers/friends'

const rootReducer = combineReducers({
  friends: FriendsReducer
})

const store = createStore(rootReducer)


export default function App() {
  return <Provider store={store}><AppNavigator /></Provider>
}
