import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import Signup from './src/components/Signup';
 import Landing from './src/components/Landing';
 import Login from './src/components/Login';
 import Home from './src/components/Home';
 import ListPage from './src/components/ListPage';
 import AnimalRegister from './src/components/AnimalRegister';
 import PetConsult from './src/components/PetConsult';
 import BookAppointment from './src/components/BookAppointment';
 import PastConsult from './src/components/PastConsult';
 import Reminder from './src/components/Reminder';
 //import { Router, Scene } from 'react-native-router-flux';
 import {Router, Route, Schema, Animations, TabBar,Stack,Scene, Actions} from 'react-native-router-flux'
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
  await Expo.Font.loadAsync({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Black': require('./src/assets/fonts/Rubik-Black.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'ColabReg': require('./src/assets/fonts/ColabReg.otf'),
    
    
  });
  this.setState({fontLoaded:true});
}
  
  render() {
    return (
     
      //<Login />
      //  <Landing />
    //   this.state.fontLoaded ? (
      
    //    <PastConsult />
    //  ):null
      
     this.state.fontLoaded ? (
      
       <Router>
       <Stack key="root">
       <Scene key="Home" component={Home} />
       <Scene key="Landing" component={Landing} />
       <Scene key="Signup" component={Signup}  />
       <Scene key="Login" component={Login} />
      
       <Scene key="PetConsult" component={PetConsult} />
       <Scene key="ListPage" component={ListPage} />
       <Scene key="BookAppointment" component={BookAppointment} />
       <Scene key="AnimalRegister" component={AnimalRegister} />
       <Scene key="PastConsult" component={PastConsult} />
       <Scene key="Reminder" component={Reminder} />
       </Stack>
     </Router>
     ):null

    );
  }
}

