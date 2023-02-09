import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react' 
import { TextInput } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const KeyboardAvoidingViewC = () => {
  return (
    <KeyboardAvoidingView style={styles.keyAvoiView} behavior={Platform.OS=='ios'?'padding':'height'}  >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerView}>
        <View>
            <TextInput placeholder='username' style={styles.textinput}/>
        </View>
        <View>
          <Button title='submit' onPress={()=>null} />
        </View>
        </View> 
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingViewC

const styles = StyleSheet.create({
  keyAvoiView:{
    flex:1
  },
  innerView:{
    justifyContent:"space-around",
    flex:1
  },  
  textinput:{
    borderColor:"#000",

    borderWidth:1,
    marginTop:heightPercentageToDP('2'),

  }
})