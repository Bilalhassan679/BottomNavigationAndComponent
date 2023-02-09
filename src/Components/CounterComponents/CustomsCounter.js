import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CounterController from './CounterController'

const CustomsCounter = () => {
    const [inputValue, setInputValue] = useState(1)
    console.log(6,inputValue)
    return (
    <View>
        <CounterController inputVal={inputValue}/>
      <TextInput
      placeholder='text' 
      value={inputValue}
      onChangeText={(text)=>setInputValue(text)}
      />
    </View>
  )
}

export default CustomsCounter

const styles = StyleSheet.create({})