import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Dimensions, ScrollView } from 'react-native';
 //import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 //import { Router, Scene } from 'react-native-router-flux';
 import {Router, Route, Schema, Animations, TabBar,Stack,Scene, Actions} from 'react-native-router-flux';
 import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
 //import { Actions } from 'react-native-router-flux';
 import Landing from '../components/Landing';
 import { Icon } from 'react-native-elements';
 import PetConsult from '../components/PetConsult';
 import * as firebase from 'firebase' 
 

export default class PastConsult extends React.Component {

constructor(props){
    super(props)
    this.state={
        name:'',
        selectedpet:'',
        doctor:'',
    }
}
  static navigationOptions = {
     
        header: null,
      };
      logOut(){
          Actions.Landing();
      }
      clickBack(){
          Actions.PetConsult();
      }


componentWillMount(){
    var referance =  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
    referance.on('value',(snap2)=>{
       
      // alert(snap1)
      //alert(snapshot);
      if(snap2.val()){
          if(snap2.val().name){
            var name = snap2.val().name;
            this.setState({name:name});
          }
          
          //console.log( this.state.allData)
      }
    })
    var allPets=[];
        
        var ref =  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/bookappoint/');
        ref.on('value',(snapshot)=>{
         
          if(snapshot.val()){
  
              var data = snapshot.val();
              for(let key in data){
                  data[key].petid = key;
                  
                  allPets.push(data[key]);
                  
              }
              this.setState({allData:allPets});
            //   alert(this.state.allData);
          }
         
        })



}

  
    
  render() {
    return (
    <View style={styles.mainView}>
        <View style={{top:30}}>
                          <Divider styleName="section-header" style={{height:70}}>
                         <View style={{justifyContent:'flex-start'}}>
                         <TouchableOpacity  onPress={()=> this.clickBack()} >
                           <Icon    name="chevron-left" />
                           </TouchableOpacity>
                           </View>
                           <View style={{flex: 1, flexDirection: 'column'}}>
                           <Caption style={{fontFamily:'ColabReg', fontSize:17,left:15}}>Welcome,</Caption>
                           <Caption style={{fontFamily:'ColabReg', fontSize:14,left:15}}>{this.state.name}</Caption> 
                           </View>
                           <TouchableOpacity  onPress={()=> this.logOut()} >
                           <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                           </TouchableOpacity>
                           </Divider>    
                
        </View>
                <View style={{top:40, height:40, width:Dimensions.get('window').width, borderWidth:0.5,borderBottomColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{alignSelf:'center', marginTop:5,color:'#fff',fontSize:20}}>Past Consultation</Text>
                </View>

                
    <View style={{top:45}}>
        
                        <ScrollView style={{height:Dimensions.get('window').height-150}}> 
                        { this.state.allData.map((item, index)=>{
                        
                       return ( <View style={{height:120,width:Dimensions.get('window').width-30, borderBottomColor:'#fff', backgroundColor:'#fff', borderRadius:10,margin:5,marginLeft:15}}>
                        <View style={{borderBottomColor:'#000',borderWidth:0.5,borderColor:'#fff',borderRadius:5}}>
                            
                            <Text style={{alignSelf:'flex-end'}}>17th feb,2018</Text>
                            
                        </View>
                        <View  style={{top:10}}>
                            <Text style={{fontSize:15}}>Name:{item.selectedpet}</Text>
                            <Text style={{fontSize:15}}>Doctor:{item.doctor}</Text>
                            {/* <Text style={{fontSize:15}}>Treatment:</Text> */}
                        </View>
                       
                        </View>
                       )
                    })
                }
                    
                        </ScrollView>
     </View>
        


      
    </View>

    );
}
}
styles=StyleSheet.create({
    mainView:{
        backgroundColor:'#6D60E8',
        height:Dimensions.get('window').height
  },
});

