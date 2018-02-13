import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import { Image,TextInput} from '@shoutem/ui';
import {Button, Input} from '../components/common';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      email:'',
      icnumber:'',
      hpnumber:'',
      address:'',
      password:''
    }
  }
  
  openAlert(){
     console.log(this.state.name , this.state.email ,this.state.username ,this.state.icnumber ,this.state.hpnumber ,this.state.address ,this.state.password);
    
  }
  render() {
    //const {width,height} = Dimensions.get('window');
    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.titleViewText}>Sign Up</Text>

                <View style={styles.imageView}>
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
                      <Button onPress={()=> this.openAlert()}>
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
