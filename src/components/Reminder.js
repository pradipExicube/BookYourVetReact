import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import { Examples,Divider,Caption } from '@shoutem/ui';
import { Font } from 'expo';
import { StackNavigator } from "react-navigation";
import { Router, Scene } from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import *as firebase from 'firebase';



export default class Landing extends React.Component {
    static navigationOptions = {
        
        header: null,
      };
      constructor(props){
        super(props)
        this.state={
          allData:[],
          doctor:'',
          date:'',
          time:'',
          mobileno:'',
          selectedpet:'',
          comment:'',
        }; 
    }
    componentWillMount() {
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


        var firebaseData=firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
        firebaseData.on('value',(snapshot) =>{
          if(snapshot.val()){
              if(snapshot.val().name){
                  
                  var name=snapshot.val().name
                  this.setState({ name:name })
              }
          }
          else{
              alert("user not found");
          }  
        })
      
    }
    
  render() {
    return (
<View style={styles.mainView}>

<View style={{top:30}}>


                       <Divider styleName="section-header" style={{height:70}}>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                                    <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                                    </View>
                                    <TouchableOpacity   onPress={()=> this.gotoLanding()} >
                                    <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                                    </TouchableOpacity>
                        </Divider>
  
</View>  
        
<View style={{top:45}}>
 
        <ScrollView style={{height:Dimensions.get('window').height-150}}> 

        { this.state.allData.map((item, index)=>{
return (
        <View style={{height:120,width:Dimensions.get('window').width-30, borderBottomColor:'#fff', backgroundColor:'#fff', borderRadius:10,margin:5,marginLeft:15}}>
                    
                            <View style={{borderBottomColor:'#000',borderWidth:0.5,borderColor:'#fff',borderRadius:5}}>
                                <Text style={{alignSelf:'center'}}>Appointments</Text>
                                
                            </View>
           
                            <View>
                                    <View  style={{top:10}}>
                                        <Text style={{fontSize:15}}>Pet:{item.selectedpet}</Text>
                                        <Text style={{fontSize:15}}>Doctor:{item.doctor}</Text>
                                        <Text style={{fontSize:15}}>Date:{item.date}</Text>
                                    </View>
                            </View>  
        </View>
    )
})
 
}

  </ScrollView>

 
</View>  
</View>  
    )
}
}
const styles = StyleSheet.create({
    mainView:{
      backgroundColor:'#6D60E8',
      height:Dimensions.get('window').height
    },
});