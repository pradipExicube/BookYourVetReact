import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import {Button} from '../components/common';
 import { Image} from '@shoutem/ui';
import Signup from './Signup';
import Login from './Login'
import { Router, Scene } from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';




export default class Landing extends React.Component {
    static navigationOptions = {
        
        header: null,
      };
    onPress = () => {
        alert("hello");
    }


    gotoSignup(){
        Actions.Signup();
    }
    gotoLogin(){
        Actions.Login();
    }
  render() {
    return (
    <View style={styles.mainView}>
   
      <View style={styles.imageView}>
                    <Image
                        styleName="medium-square"
                        source={require('../assets/img/logo.png')}
                    />
                </View>

        <View>
        <View style={{top:190,height:40, width:230,alignSelf:'center',}}>
                      <Button onPress={()=> this.gotoLogin()}>
                          Sign In
                      </Button>
                </View> 
                
                <View style={{top:200,height:40, width:230,alignSelf:'center',}}>
                      <Button onPress={()=> this.gotoSignup()}>
                          Sign Up
                      </Button>
                </View> 

        </View>
        <View style={styles.footer}>

            <View style={styles.flexView}>
                <TouchableOpacity   onPress={this.onPress} style={styles.fixText}>
                {/* <Text style={styles.fixText}>About Us</Text> */}
                    <Text>About Us</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.flexView}>
                <TouchableOpacity   onPress={this.onPress} style={styles.fixText}>
                {/* <Text style={styles.fixText}>Contact Us</Text> */}
                    <Text>Contact Us</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.flexView} >
                <TouchableOpacity   onPress={this.onPress} style={styles.fixText}>
                {/* <Text style={styles.fixText}>Location</Text> */}
                    <Text >Location</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    </View>
    
    
    );
  }
}
/* <View style={{width: (Dimensions.get('window').width/3),margin:5, height: 80, backgroundColor: '#fff'}} />
        <View style={{width: (Dimensions.get('window').width/3),margin:5, height: 80, backgroundColor: '#fff'}} />
        <View style={{width: (Dimensions.get('window').width/3),margin:5, height: 80, backgroundColor: '#fff'}} />*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView:{
    backgroundColor:'#6D60E8',
    height:Dimensions.get('window').height
  },
  imageView:{
      top:150,
      alignSelf:'center',
      
    },
        footer: {
            flex: 1,
        
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'absolute', 
             top: Dimensions.get('window').height-90, 
             width: Dimensions.get('window').width,
           
         
    },
    flexView:{
        width: (Dimensions.get('window').width/3),
        margin:4,
         height: 70, 
         backgroundColor: '#fff'
    },
    fixText:{
        flex:1,
        top:25,
        alignSelf:'center',
        alignItems: 'center',
        alignSelf:'center',
    }
});
