import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import Signup from './src/components/Signup'

export default class App extends React.Component {
  constructor(){
    super();
      this.state={
        fontLoaded:false, 
      };
  }
async componentDidMount() {
  await Font.loadAsync({
    'Rubik-Regular': require('./src/components/fonts/Rubik-Regular.ttf'),
    
  });
  this.setState({fontLoaded:true});
}
  
  render() {
    return (
     this.state.fontLoaded ? (
       <Signup />
     ):null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
