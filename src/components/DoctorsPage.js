import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
 //import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import {Input,Button} from '../components/common';
import { Actions } from 'react-native-router-flux';
import *as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'

export default class PetConsult extends React.Component {
    static navigationOptions = {
     
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          name:'',
          breed:'',
          date:'',
          time:'',
          gender:'',
          doctor:'',
         dateofbirth:'',
         allData:[], 
        }
      }

      gotoLanding(){
          Actions.Landing();
      }
      pastConsult(){
          Actions.PastConsult();
      }
      componentWillMount(){

        var userCurrent=firebase.auth().currentUser;
        var allPets=[];
        var ref =  firebase.database().ref('/BookAppointment/');
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

     <View style={{top:40}}>
                <Divider styleName="section-header" style={{height:70}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                        <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Rodriguez</Caption>
                    </View>
                    <TouchableOpacity   onPress={()=> this.gotoLanding()}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                    </TouchableOpacity>
                </Divider>
                {/*end Divider*/}
                {/*start Image*/}       
     </View>
                <View style={{top:40, height:40, width:Dimensions.get('window').width}}>
                        <Text style={{alignSelf:'center', marginTop:5,color:'#fff',fontSize:30}}>Doctor's Page</Text>
                </View>


<View style={{top:45}}> 
<ScrollView style={{height:Dimensions.get('window').height-150}}>  

     { this.state.allData.map((item, index)=>{              

    return( 
    <View>
         <View style={{height:120,width:Dimensions.get('window').width-40, borderBottomColor:'#fff', backgroundColor:'#fff', borderRadius:10,marginLeft:15}}>
      
      
              <View  style={{left:5}}>
           
                            <Text style={{fontSize:20,color:'#A14949'}}>PetName:{item.selectedpet}</Text>
                            <Text style={{fontSize:20,color:'#A14949'}}>Date:{item.date}</Text>
                            <Text style={{fontSize:20,color:'#A14949'}}>Time:{item.time}</Text>
                            <Text style={{fontSize:20,color:'#A14949'}}>Mobile No:{item.mobileno}</Text>
                      
              </View>   
                            
                            <View style={{position:'absolute', right:10}}>
                                <Icon size={40}    color='red' name='plus'/>
                             </View>
     </View>
                <View style={{flexDirection:'row',height:50,width:100,alignSelf:'center',backgroundColor:'#4285F4',marginBottom:5,borderRadius:8}}>
                                        <Button onPress={()=> this.clickSubmit()}>
                                                                    Treatment
                                        </Button>
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
//   imageView:{
//     top:50,
//     alignSelf:'center'
//   },
detailsMainView:{top:120},
detailsColumnView:{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'},
detailsColumnMainView:{marginTop:10},
detailsColumnMainTwoView:{marginTop:50},
detailsRowView:{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'},
detailsRowSubOneView:{width:200, backgroundColor:'#BFC9D2', height:40, top:30},
detailsRowSubTwoView:{width:150, backgroundColor:'#fff', height:40,top:30},
detailsTextView:{alignSelf:'center', top:8,color:'#000'}

  
});