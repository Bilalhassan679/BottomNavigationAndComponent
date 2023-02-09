import { StyleSheet, Text, View ,} from 'react-native'
import React,{ useState } from 'react'
import { RadioButton } from 'react-native-paper';
const OneSelectedRadioButton = () => {
  const [checked, setChecked] = useState(1);
  const data = [
    {id:1, name:'one'},
    {id:2, name:'two'},
    {id:3, name:'three'},
  ]  
  return (
    <View>
      <Text>OneSelectedRadioButton</Text>
      {data.map((item)=>(
        <View style={{flexDirection:'row'}}>
      <RadioButton
        value={item.id}
        status={ checked === item.id ? 'checked' : 'unchecked' }
        onPress={() => setChecked(item.id)}
      />
      <Text>{item.name}</Text>
      </View>
      ))}
    </View>
  )
}

export default OneSelectedRadioButton

// const styles = StyleSheet.create({})