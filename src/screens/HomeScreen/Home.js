import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import ModalComponent from '../../Components/ModalComponent'
import MultiSelectFlatList from '../../Components/MultiSelectFlatList'
import KeyboardAvoidingViewC from '../../Components/KeyboardAvoidingViewC'
import CounterController from '../../Components/CounterComponents/CounterController'
import CounterView from '../../Components/CounterComponents/CounterView'
import CustomsCounter from '../../Components/CounterComponents/CustomsCounter'
import CreateBillComponents from '../../Components/CreateBillComponents/CreateBillComponents'

const Home = () => {
  // const url='https://dummyjson.com/product';
 
    
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      {/* <ModalComponent/> */}
      {/* <MultiSelectFlatList/> */}
      {/* <KeyboardAvoidingViewC/> */}
      {/* <TouchableOpacity onPress={()=>GetData(url)}>
        <Text>Hello</Text>
      </TouchableOpacity> */}
      {/* <CounterController/> */}
      {/* <CustomsCounter /> */}
      <CreateBillComponents/>
    </View>
  )
}

export default Home
