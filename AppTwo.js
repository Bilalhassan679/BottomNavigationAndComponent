import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';

function AppTwo() {

  return (
    <>

        <NavigationContainer >
          <StackNavigatior />
        </NavigationContainer>
    </>
  );
}

export default AppTwo;

const styles = StyleSheet.create({
  
});