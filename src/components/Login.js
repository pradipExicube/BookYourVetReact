import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity, Modal} from 'react-native';
import { Examples } from '@shoutem/ui';
import { Font, FileSystem } from 'expo';
import { Input,Button} from '../components/common';
import { Image} from '@shoutem/ui';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { ImagePicker,Permissions} from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import b64 from 'base64-js'
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
          image: null,
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
    // async componentWillMount() {
    //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //   this.setState({ permissionsGranted: status === 'granted' });
    // }
    // async componentDidMount(){
    //   FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e =>{
    //     console.log(e,'Directory exists');
    //   });

    // }
// picUpload=async function () {
//      if(this.camera){
//       // let result = await ImagePicker.launchImageLibraryAsync();
//        this.camera.takePictureAsync().then(data =>{
//          FileSystem.moveAsync({
//            from:data.uri,
//            to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
//           }).then(() => {
//             this.setState({
//             photoId: this.state.photoId + 1,

//          });
//          Vibration.vibrate();
//         });
//       });
//     }
//   };

    uploadPic = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsEditing: true,
        aspect: [4, 3],
      });
      // console.log(result);  

      if (result && result[0]) {
        var FR= new FileReader();
        FR.addEventListener(function(e) {
        document.getElementById().src= e.target.result;
        document.getElementById().innerHTML= e.target.result;
  }); 
  console.log(e.target.result)
  FR.readAsDataURL( this.files[0] );
}
   
      try {
        var metadata = {
          contentType: 'image/jpg',
        };
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child('/images/').put(result.base64, metadata);
        console.log(result);
        
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
  
        }, function (error) {
          console.log( error)
        }, function () {
          var downloadURL = uploadTask.snapshot.downloadURL;
          console.log( uploadTask.snapshot.downloadURL)
        });
  
  
      } catch (ee) {
        console.log("when trying to load _uploadAsByteArray ", ee)
      }
    }

           
  //   uploadPic =async function takeAndUploadPhotoAsync() {
  //     const result = await ImagePicker.launchCameraAsync({
  //         base64: true
  //     })
  //    const byteArray = b64.toByteArray(result.base64)
  //   //  console.log(byteArray);
  //    const metadata = {contentType: 'image/jpg'}; 
  //    firebase.storage().ref('/images').child('my_pic.jpg').put(byteArray, metadata).then(snapshot => {
  //        console.log("uploaded image!")
  //    })
  // }
  render() {
    let { image } = this.state;
    return (
      <View>
  <View  style={styles.mainView}>
  <View style={styles.fixing}>
          <Text style={{color:'#fff',fontSize: 20}} >Login</Text>
  </View>
      
   <View style={styles.imageView}>
   <TouchableOpacity  onPress={()=>this.uploadPic()}>
                    <Image 
                        styleName="medium-square"
                        source={require('../assets/img/logo.png')}
                      />
                      </TouchableOpacity>
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



