import React, { useCallback } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { friendAdd } from '../store/actions/friends'

const HomeScreen = (props) => {

  const friends = useSelector(state => state.friends)
  const dispatch = useDispatch()

  const addFriend = (friendIndex) => {
    dispatch(friendAdd(friendIndex))
  }

  return (
    <View style={styles.constainer}>
      {
        friends.possibleFriends.length > 0 ? 
        (
          friends.possibleFriends.map((friend, index) => (
            <View key={friend} style={styles.userContainer}>
              <Text style={styles.text}>{`${index + 1}. ${friend}`}</Text>
              <Button
                title="Add"
                onPress={() => addFriend(index)}
              />
            </View>
          ))
        ) :
        (
          <Text>You have exhausted the list</Text>
        )

      }
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  text: {
    fontSize: 22,
    marginEnd: 10
  }
})

export default HomeScreen