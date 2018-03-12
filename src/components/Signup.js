import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Font } from 'expo';
import { Image,TextInput} from '@shoutem/ui';
import {Button, Input} from '../components/common';
import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';

export default class Signup extends React.Component {
    static navigationOptions = {
       
        header: null,
      };
  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      email:'',
      icnumber:'',
      hpnumber:'',
      address:'',
      password:'',
    } 
  }
  clickSubmit(){
      console.log("hiii");
      if(this.state.name=="" || this.state.username=="" || this.state.email=="" || this.state.icnumber=="" || this.state.hpnumber=="" || this.state.address=="" || this.state.password=="" ||
         this.state.name==undefined || this.state.username==undefined || this.state.email==undefined || this.state.icnumber==undefined || this.state.hpnumber==undefined || this.state.address==undefined ||
         this.state.password==undefined){

            if(this.state.name=="" || this.state.name==undefined){
                alert("please input name");
            }else if(this.state.username=="" || this.state.username==undefined){
                alert("please input your username");
            }else if(this.state.email=="" || this.state.email==undefined){
                alert("please input your email");
            }else if(this.state.icnumber=="" || this.state.icnumber==undefined){
                alert("please input your icnumber");
            }else if(this.state.hpnumber=="" || this.state.hpnumber==undefined){
                alert("please input your hpnumber");
            }else if(this.state.address=="" || this.state.address==undefined){
                alert("please input your address");
            }else if(this.state.password=="" || this.state.password==undefined){
                alert("please input your password");
            }  
        }
        
         else{
             console.log("else part working");

             let data={
             name:this.state.name,
             username:this.state.username,
             email:this.state.email,
             icnumber:this.state.icnumber,
             hpnumber:this.state.hpnumber,
             address:this.state.address,
             password:this.state.password,
             type:"user"
             }
             console.log(data);
         
      
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((newUser) =>{
        console.log("hello");
        console.log(newUser);
       firebase.database().ref('/users/' + newUser.uid + '/').set(data)

        
    })
    .catch((error)=>{
        alert("successfully registered")
    }); 
         
 }

} 


    
  render() {

    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.titleViewText}>Sign Up</Text>

                <View style={styles.imageView} >
                    <Image  
                        styleName="small"
                        source={require('../assets/img/logo.png')}
                    />
                </View>

                <View style={{top:30}}>
                    <Input 
                        placeholder="Name"
                        onChangeText={text=>this.setState({name:text})}
                    />
                    <Input 
                        placeholder="Username"
                        onChangeText={text=>this.setState({username:text})}
                    />
                    <Input 
                        placeholder="Email"
                        onChangeText={text=>this.setState({email:text})}
                    />
                    <Input 
                        placeholder="IC Number"
                        onChangeText={text=>this.setState({icnumber:text})}
                    />
                    <Input 
                        placeholder="HP Number"
                        onChangeText={text=>this.setState({hpnumber:text})}
                    />
                    <Input 
                        placeholder="Address"
                        onChangeText={text=>this.setState({address:text})}
                    />
                    <Input 
                        placeholder="Password"
                        onChangeText={text=>this.setState({password:text})}
                    />
                </View>
                <View style={{top:40,height:40, width:200,alignSelf:'center',}}>
                      <Button onPress={()=> this.clickSubmit()}>
                          Submit
                      </Button>
                </View> 
            </View>

        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'#6D60E8',
    height:Dimensions.get('window').height
  },
  titleView:{
    top:40,
  },
  titleViewText:{
    color:'#fff',fontSize: 20,fontWeight:'bold',alignSelf:'center'
  },
  imageView:{top:20,alignSelf:'center'}
  });
