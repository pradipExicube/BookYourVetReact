import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import Signup from './src/components/Signup';
 import Landing from './src/components/Signup';
 

 import firebase from "firebase";



export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDvsD-VA3sBmfNAnRUGHVyDTLjXv3PCUcw",
      authDomain: "bookyourvetreact-6a1bf.firebaseapp.com",
      databaseURL: "https://bookyourvetreact-6a1bf.firebaseio.com",
      projectId: "bookyourvetreact-6a1bf",
      storageBucket: "bookyourvetreact-6a1bf.appspot.com",
      messagingSenderId: "358320895461"
    };
    firebase.initializeApp(config);
  }
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
       <Landing />
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
