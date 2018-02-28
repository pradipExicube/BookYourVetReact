import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity, Modal} from 'react-native';
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
          modalVisible: false,
          enterMail:'',
        }
    }
  
    openModal() {
      this.setState({modalVisible:true});
    }
  
    closeModal() {
      this.setState({modalVisible:false});
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
passwordAlert(msg,status){
  this.setState({enterMail:''});
  if(status=='failed'){
    alert(msg);
  }
  else{
    alert(msg);
    this.closeModal();
  }

}

    clickSubmit(){
      if(this.state.enterMail=="" || this.state.enterMail==undefined || this.state.enterMail==null){
        this.passwordAlert('Please insert a valid mail id',"failed")

      }
      else{
        firebase.auth().sendPasswordResetEmail(this.state.enterMail).then((success)=>{
        this.passwordAlert("password has been sent to your mail address","success")
      })
      .catch((error)=>{
        this.passwordAlert(error,"failed")

      })
      
      }
    }
   
    
  render() {
    return (
      <View>
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

   
    
       <View style={{width:200, height: 50,}} >
            <TouchableOpacity onPress={() => {this.openModal()}}>
                    <Text style={{color:'#fff'}}>Forget Password</Text>
            </TouchableOpacity>      
       </View>
      
      
      </View>
            
  </View>
  
  {/* <View>
       <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({open: false})}
            style={{alignItems: 'center'}}>
<View>
     <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
     <TouchableOpacity
             style={{margin: 5}}
             onPress={() => this.setState({offset: -100})}>
               <Text>Move modal up</Text>
     </TouchableOpacity>
       <TouchableOpacity
                 style={{margin: 5}}
                 onPress={() => this.setState({offset: 0})}>
                 <Text>Reset modal position</Text>
         </TouchableOpacity>
         <TouchableOpacity
                   style={{margin: 5}}
                   onPress={() => this.setState({open: false})}>
                   <Text>Close modal</Text>
         </TouchableOpacity>
</View>
</Modal>
</View> */}


</View>
<View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View >
                <View >
                  <Input 
                        placeholder="Reset Password"
                        onChangeText={text=>this.setState({enterMail:text})}
                  />
                  </View>
                      <View style={{flex: 1, flexDirection: 'row', left:15, top:15,alignSelf:'center',width:200}}>
                      <View style={{width: 100, height: 50,let:20}} >
                                <Button  onPress={()=> this.clickSubmit()}>
                                        Submit
                                </Button> 
              
                      </View> 
              
                   {/* <View style={{width:5, height: 50,}} >
                      
                                  <Text style={{color:'#fff'}}>|</Text>
                   </View> */}
                  
                     <View style={{width: 100, height: 50}} >
                          <Button  onPress={()=> this.closeModal()}>
                               Cancel
                          </Button>     
                     </View>
                    </View>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
          <Button
              onPress={() => this.openModal()}
              title="Open modal"
          />
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
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d7dee8',
  },
  
});
