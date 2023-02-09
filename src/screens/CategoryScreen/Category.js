import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../CategoryScreen/style'
import OneSelectedRadioButton from '../../Components/OneSelectedRadioButton/RadioButtion'

const Category = () => {
  return (
    <View style={styles.container}>
      <Text>Category</Text>
      <OneSelectedRadioButton />
    </View>
  )
}

export default Category
