import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';

const SectionListComponent = () => {
    const data1=[
        {
            title:'Main Dishes',
            data:['Pizza','Burger','Risotto']
        },
        {
            title:'Sides',
            data:['Fries','Onion Rings','Fried Shrimp']
        },
        {
            title:'Drinks',
            data:['Water','Soda','Juice']
        },
        {
            title:'Desserts',
            data:['Cake','Ice Cream','Pie']
        },
    ];

    const ListItem=({title})=>{
        console.log('title=>',title)
        return(
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </View>)
    }
  return (
    <View style={{alignSelf:'flex-start',marginTop:heightPercentageToDP('6')}}>
      {/* <Text>SectionListComponent</Text> */}
      <SectionList
      sections={data1}
      keyExtractor={(item,index)=>item+index}
      renderItem={({item})=><ListItem title={item}/>}
      renderSectionHeader={({section:{ title}})=>
      <View style={{backgroundColor:'dodgerblue'}}>
        <Text style={{fontSize:heightPercentageToDP('3')}}>{title}</Text>
        </View>
      }
      />
    </View>
  )
}

export default SectionListComponent

const styles = StyleSheet.create({
    item:{
        alignSelf:'flex-start',
        justifyContent:'flex-start'
    },
    text:{
        fontSize:heightPercentageToDP('2.5')
    }
})