import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CounterView from './CounterView'

const CounterController = (props) => {
    const [counter, setCounter] = useState(0)
    console.log(7,props?.inputVal)
    function increment() {
        setCounter(prev=>parseInt(prev)+parseInt(props?.inputVal))
    }
    function decrement() {
        setCounter(prev=>prev-props?.inputVal)
    }
  return (
    <View>
        <CounterView value={counter}/>
        <TouchableOpacity onPress={()=>increment()}>
      <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>decrement()}>
      <Text>Decrement</Text>
        </TouchableOpacity>

    </View>
  )
}

export default CounterController

const styles = StyleSheet.create({})