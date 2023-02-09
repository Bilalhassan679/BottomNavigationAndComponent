import { StyleSheet, Text, TextInput, View ,Button,Share, PermissionsAndroid} from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import dateFormat from 'dateformat'
import { PdfToHtml } from './PdfToHtml'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
const CreateBillComponents = () => {
  const [filePath, setFilePath] = useState('');

    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [invoiceDate,setInvoiceDate]=useState(dateFormat(date,"ddmmyyhhMss"));
    const [fileUrl,setFileUrl]=useState(dateFormat(date,"ddmmyyhhMss"));

    const date=new Date();
    
    //  const  PrintInvoice= async()=>{
    //     const html= PdfToHtml(name,phone,invoiceDate);
    //     console.log("=>",html)
    //     try{
    //       let options = {
    //         html,
    //         fileName: 'test',
    //         directory: 'Documents',
    //       };
    //        RNHTMLtoPDF.convert(options).then(filePath=>{
    //         Share.open({
    //           title:'Receipt Generation',
    //           message:"Receipt Generation",
    //           url:filePath.filePath
    //         })
    //        })
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    //     console.log('hello')
    // }
    const isPermitted = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'External Storage Write Permission',
              message: 'App needs access to Storage data',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          alert('Write permission err', err);
          return false;
        }
      } else {
        return true;
      }
    };
  
    const createPDF = async () => {
      const html= PdfToHtml(name,phone,invoiceDate);
      if (await isPermitted()) {
        let options = {
          //Content to print
          html,
            
          //File Name
          fileName: 'test1',
          //File directory
          directory: 'docs',
        };
        let file = await RNHTMLtoPDF.convert(options);
        console.log(file.filePath);
        setFilePath(file.filePath);
      }
    };
    {console.log("first=>",filePath)}
    
  return (
    <View style={styles.container}>
        <View style={styles.InputView}>
      <Text>Name</Text>
      <TextInput 
      style={styles.textInput}
      value={name}
      placeholder='Name'
      onChangeText={(e)=>setName(e)}
      />      
        </View>
        
        <View style={styles.InputView}>
      <Text>PhoneNumber</Text>
      <TextInput 
      style={styles.textInput}
      value={phone}
      keyboardType='phone-pad'
      placeholder='PhoneNumber'
      onChangeText={(e)=>setPhone(e)}
      />      
    </View>
        
       <Button title='Create Invoice' onPress={createPDF}/>
        
    </View>
  )
}

export default CreateBillComponents

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:hp('2'),
        marginTop:hp('2'),
        alignSelf:'flex-start',
        padding:10
        
    },
    
    textInput:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'black',
        height:hp('5'),
        width:wp('90'),
        marginTop:hp('1'),
        marginBottom:hp('2')

    }
})