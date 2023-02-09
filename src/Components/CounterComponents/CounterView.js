import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterController from './CounterController'

const CounterView = (props) => {
  return (
    <>
    <View style={styles.container}>
      <Text>{props?.value}</Text>
    </View>
    </>
  )
}

export default CounterView

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
})