import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Picker} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
import {Button, Input} from '../components/common'; 
import {Actions} from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';

export default class AnimalRegister extends React.Component {
    
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          name:'',
          species:'',
          gender:'',
          breed:'',
          dateofbirth:'',
          otherinfo:'',
          picture:''
        }
       
      }
      
      logOut(){
          Actions.Landing();
      }
      submitClick(){
        //   alert("working");
        //   firebase.database().ref('/users/' + firebase.auth().currentUser.uid  + '/mypets/').push({name:"data"});
        if(this.state.name=="" || this.state.species=="" || this.state.gender=="" || this.state.breed=="" || this.state.dateofbirth=="" || this.state.otherinfo=="" || 
         this.state.name==undefined || this.state.species==undefined || this.state.gender==undefined || this.state.breed==undefined || this.state.dateofbirth==undefined || this.state.otherinfo==undefined){
                    
            if(this.state.name=="" || this.state.name==undefined){
                alert("please put the valid data");
            }
            else if(this.state.species=="" || this.state.species==undefined){
                alert("please put the valid data");

            }
            else if(this.state.gender=="" || this.state.gender==undefined){
                alert("please put the valid data");

            }
            else if(this.state.breed=="" || this.state.breed==undefined){
                alert("please put the valid data");

            }
            else if(this.state.dateofbirth=="" || this.state.dateofbirth==undefined){
                alert("please put the valid data");
            }
            else if(this.state.otherinfo=="" || this.state.otherinfo==undefined){
                alert("please put the valid data");

            }
            
         }
         else{
             var data={
                 name:this.state.name,
                 species:this.state.species,
                 gender:this.state.gender,
                 breed:this.state.breed,
                 dateofbirth:this.state.dateofbirth,
                 otherinfo:this.state.otherinfo,
             }
             var user=firebase.auth().currentUser;
            //  console.log(user);
            //  alert(user.uid);
            
               firebase.database().ref('/users/' + firebase.auth().currentUser.uid  + '/mypets/').push(data);   

               alert("successfully submitted")
         Actions.ListPage();
         
            }
            
    }
    cancelClick(){
        Actions.pop();
    }
   
    pickImage = async () => {
        currentPerson=firebase.auth().currentUser;
            let result = await ImagePicker.launchImageLibraryAsync({
                
              allowsEditing: true,
               base64:true,
              aspect: [4, 3],
            }); 
            console.log(result);
            this.setState({picture:result.uri});
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid  + '/mypets/').push(result);   

            alert("successfully submitted")
        
    }
    componentWillMount(){
    var firebaseData= firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
    firebaseData.on('value',(snap3)=>{
        if(snap3.val()){
            if(snap3.val().name){
              var name = snap3.val().name;
              this.setState({name:name});
            }         
        }
      })

      var allPets=[];
      var ref =  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/mypets/');
      ref.on('value',(snapshot)=>{
        if(snapshot.val()){
            var data = snapshot.val();
            for(let key in data){
                data[key].petid = key;
                allPets.push(data[key]);
            }
            this.setState({allData:allPets});  
        }
      })

    //   var firebaseImage=firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/mypets/');
     
    //   firebaseImage.on('value',(snapshot)=> {
    //     console.log("hi");
    //       console.log(snapshot.val());
    //       console.log("hello");
    //     if(snapshot.val()){
    //          var picture=snapshot.val();
    //          for(let key in data){
    //              data[key].petid=key;
    //              allPets.push(data[key]);
    //          }
          
    //         this.setState({allData:allPets},()=>{console.log(allData);});
        
    //       }

    //   })

}
//}
  render() {
    let data = [{
        value: 'Male',
      }, {
        value: 'Female',
      }, 
    ];

    return (
     <View style={styles.mainView}>
         <View style={{top:30}}>
                <Divider styleName="section-header" style={{height:70}}>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                                <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                                </View>
                                <TouchableOpacity  onPress={()=> this.logOut()} >
                                <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                                </TouchableOpacity>
                            
                </Divider>

    </View>
    <View>
                 <View style={styles.imageView}>
                 <TouchableOpacity  onPress={this.pickImage} >
                 
                        
                       <Image
                         styleName="medium-avatar"

                        source={{ uri:this.state.picture ? this.state.picture:null}}
                      />
                  
                   
                      </TouchableOpacity>
                 </View>

   </View>
<View style={{top:60}}>
                    <Input 
                        placeholder="Name"
                        onChangeText={text=>this.setState({name:text})}
                    />


                    <Input 
                        placeholder="Species"
                        onChangeText={text=>this.setState({species:text})}
                    />
                     <Input
                        placeholder="Gender"
                        onChangeText={text=>this.setState({gender:text})}
                     />
                     
                    <Input 
                        placeholder="Breed"
                        onChangeText={text=>this.setState({breed:text})}
                    />
                    <Input 
                        placeholder="D.O.B"
                        onChangeText={text=>this.setState({dateofbirth:text})}
                    />
                    <Input 
                        placeholder="Other Information"
                        onChangeText={text=>this.setState({otherinfo:text})}
                    />
                    <View style={{flex: 1, flexDirection: 'row', left:5, top:15,alignSelf:'center'}}>
                    <View style={{width: 100, height: 50}} >
                      <Button onPress={()=> this.submitClick()} >
                          Submit
                      </Button>
                      </View>
                      <View style={{width:100, height: 50,}} >
                      <Button onPress={()=> this.cancelClick()}>
                        Cancel
                      </Button>
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
  imageView:{
      top:50,
      alignSelf:'center',
      borderRadius:10,
      borderWidth:1,
      borderColor:'#fff'
    }
});
