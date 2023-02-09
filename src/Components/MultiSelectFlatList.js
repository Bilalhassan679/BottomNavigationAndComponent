import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const MultiSelectFlatList = () => {
  const data=[
    {
      id:0,
      name:'bugger',
      selectedValue:false
    },
    {
      id:1,
      name:'bugger',
      selectedValue:false
    },
    {
      id:2,
      name:'bugger',
      selectedValue:false
    },
    {
      id:3,
      name:'bugger',
      selectedValue:false
    },
    {
      id:4,
      name:'bugger',
      selectedValue:false
    },
    {
      id:5,
      name:'bugger',
      selectedValue:false
    }
  ]
  const [selected,setSelected]=useState(data);
  console.log('SelectedArray',selected);

  const MultiSelectItem=(item)=>{
    const selectedArray=selected.map(val=>
        {
          if(val.id===item.id){
            return {...val,selectedValue:!(item.selectedValue)}
          }
          else{
            return val;
          }
        })
        setSelected(selectedArray);
  }
  return (
      <FlatList
      data={selected}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>{
        // console.log(58,item)
        return (
          <TouchableOpacity 
          onPress={()=>MultiSelectItem(item)}
          style={{...styles.topContainer,
           backgroundColor:item?.selectedValue ===true ? 'red' : 'green',
          
          }}>

          <Text>
            {item?.name}
          </Text>
          </TouchableOpacity>
        )}
      }
      />
  )
}

export default MultiSelectFlatList

const styles = StyleSheet.create({
  topContainer:{
    padding:20,
    width:widthPercentageToDP("100"),
    marginTop:heightPercentageToDP('1')
    }
})