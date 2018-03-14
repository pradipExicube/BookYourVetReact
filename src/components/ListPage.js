import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
import ActionButton from 'react-native-action-button';
import { Router, Scene } from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import *as firebase from 'firebase';

 
export default class ListPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
      super(props)
      this.state={
        name:'',
        picture:'',
        allData:[]
      }; 
  }
  componentWillMount() {
      var allPets=[];
      
      var ref =  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/mypets/');
      ref.on('value',(snapshot)=>{
        //alert(snapshot);
        if(snapshot.val()){

            var data = snapshot.val();
            for(let key in data){
                data[key].petid = key;
                // alert(key);
                allPets.push(data[key]);
                // alert(data[key])
            }
            this.setState({allData:allPets});
            //console.log( this.state.allData)
        }

      })

      var reff =  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
      reff.on('value',(snap1)=>{
        // alert(snap1)
        //alert(snapshot);
        if(snap1.val()){
            if(snap1.val().name){
              var name = snap1.val().name;
              this.setState({name:name});
            }
            
            //console.log( this.state.allData)
        }
      })
}
// componentWillMount(){
//   var allPets=[];
//   var ref=firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/mypets/');
//   ref.on('value',(snapuser) =>{
//     if(snapuser.val()){
//       var data=snapuser.val();
//       for(let key in data){
//         data[key].petUid=key;
//         alert(data[key.petUid]);
//         allPets.push(data[key]);
//       }

//     }
//   })
// }




  gotoLanding(){
Actions.Landing();
  }
  gotoAnimalRegister(){
    Actions.AnimalRegister();
  }
  listClick(){
    Actions.PetConsult();
  }

  render() {
    if(this.state.allData == [] || this.state.allData == "" || this.state.allData == undefined){
      return (
        <View style={styles.mainView}>
        <View style={{top:30}}>
                   <Divider styleName="section-header" style={{height:70}}>
                   <View style={{flex: 1, flexDirection: 'column'}}>
                   <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                   <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                   </View>
                   <TouchableOpacity  onPress={()=> this.gotoLanding()}  >
                   <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                   </TouchableOpacity>
                   
                 </Divider>


        </View>
              <View><Text>No pet found</Text></View>
        </View>
          
        );
    }
    else{

   
    return (
     <View style={styles.mainView}>
         <View style={{top:30}}>
                    <Divider styleName="section-header" style={{height:70}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                    <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                    <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                    </View>
                    <TouchableOpacity  onPress={()=> this.gotoLanding()}  >
                    <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                    </TouchableOpacity>
                    
                  </Divider>


         </View>

 <View style={{top:40}}> 



  <ScrollView style={{height:Dimensions.get('window').height-130}}>

        { this.state.allData.map((item, index)=>{
              
               //<View><Text>{item.name}</Text></View>
      return  <TouchableOpacity onPress={()=> this.listClick()}>
                  <Row style={{margin:3}}>
                    <Image
                      styleName="small rounded-corners"
                      source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                    />
                    <Title styleName="top" style={{left:110}}>{item.name}</Title>

                    <Subtitle >Species</Subtitle>
                  </Row>
              </TouchableOpacity>

              

              })

              }  

</ScrollView> 
  <ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={()=> this.gotoAnimalRegister()}
/>

</View> 

     </View>
    );
  }
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
});
