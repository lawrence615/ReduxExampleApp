import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = props => {

  const friends = useSelector(state => state.friends)

  return (
    <View style={styles.constainer}>
      <Text>You have {friends.currentFriends.length} friends.</Text>
      <Button
        title="Add some friends"
        onPress={() => { }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default HomeScreen