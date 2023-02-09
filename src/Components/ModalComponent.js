import {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const ModalComponent = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          Alert.alert('Modal has been closed'),
            setModalVisibility(!modalVisibility);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Hello
                    </Text>
                    <Pressable onPress={()=>setModalVisibility(!modalVisibility)} style={[styles.button,styles.buttonClose]}>
                    <Text style={styles.textStyle}>
                        Hide Modal
                    </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable onPress={()=>setModalVisibility(true)} style={[styles.button,styles.buttonOpen]}>
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <Text>as</Text>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:22
  },
  modalView:{
    margin:20,
    backgroundColor:'purple',
    borderRadius:20,
    padding:35,
    alignItems:'center'
  },
  button:{
    borderRadius:20,
    elevation:2,
    padding:10
  }
  ,
  buttonOpen:{
    backgroundColor:'blue'
  },
  buttonClose:{
backgroundColor:'red'
  },
  textStyle:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
  },
  modalText:{
    marginBottom:15,
    textAlign:'center'
  }
});
