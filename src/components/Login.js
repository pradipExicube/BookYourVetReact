import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity  } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import { Input,Button} from '../components/common';
 import { Image} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

 import { Router, Scene } from 'react-native-router-flux';
export default class Login extends React.Component {
    static navigationOptions = {
     
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          username:'',
          password:'',
          email:'',
        }
    }
    gotoSignup(){
      Actions.Signup();
    }
    clickSignin(){
    
      firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then(user=>{
        if(user){
          alert("ready to signin");
          Actions.Home();

        }
        
      })
      .catch(error =>{
        alert(error);
      })
    }
  render() {
    return (
  <View  style={styles.mainView}>
  <View style={styles.fixing}>
          <Text style={{color:'#fff',fontSize: 20}} >Login</Text>
  </View>
      
   <View style={styles.imageView}>
                    <Image
                        styleName="medium-square"
                        source={require('../assets/img/logo.png')}
                      />
   </View>
 <View style={styles.inputView}>
        <Input 
              placeholder=" User Name"
              onChangeText={text=>this.setState({username:text})}
              />
         <Input 
              placeholder="Password"
              onChangeText={text=>this.setState({password:text})}
    
              />

    <View style={{top:10,height:40, width:200,alignSelf:'center'}}>
                <Button onPress={()=> this.clickSignin()}>
                Sign in
                </Button>
   
    </View> 

    <View style={{flex: 1, flexDirection: 'row', left:15, top:15,alignSelf:'center',width:200}}>
        <View style={{width: 52, height: 50}} >
                    <TouchableOpacity    onPress={()=> this.gotoSignup()} >
                    <Text style={{color:'#fff'}}>Sign Up</Text>
                    </TouchableOpacity>
        </View> 

     <View style={{width:5, height: 50,}} >
        
                    <Text style={{color:'#fff'}}>|</Text>
      </View>
        
       <View style={{width:200, height: 50,}} >
                    <TouchableOpacity   >
                    <Text style={{color:'#fff'}}>Forgot Password?</Text>
                    </TouchableOpacity>
        </View>

      </View>
         

           
  </View>
  </View>

   
    
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
  mainView:{
    backgroundColor:'#6D60E8',
    height:Dimensions.get('window').height
  },
  inputView:{
      top:130 
  },
  imageView:{
    top:90,
    alignSelf:'center',
    

  },
  fixing:{
    alignSelf:'center',
   
  //  fontSize: 50,
   top:50
    
  }
 

  
});
