import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity } from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
 //import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import {Input,Button} from '../components/common';
import { Actions } from 'react-native-router-flux';
import *as firebase from 'firebase';

export default class PetConsult extends React.Component {
    static navigationOptions = {
     
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          name:'',
          breed:'',
          gender:'',
         dateofbirth:'',
         allData:[]
         
        }
      }
componentWillMount(){
    var user=firebase.auth().currentUser;
    
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





    var firebaseData= firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
    firebaseData.on('value',(snap2)=>{
        if(snap2.val()){
            if(snap2.val().name){
              var name = snap2.val().name;
              this.setState({name:name});
            }         
        }
      })
    }


      gotoLanding(){
          Actions.Landing();
      }
      pastConsult(){
          Actions.PastConsult();
      }
  render() {
    if(this.state.allData == [] || this.state.allData == "" || this.state.allData == undefined){
    
                return (
                    <View>
                    <View style={styles.mainView}>
                        {/*Devider*/}
                        <View style={{top:30}}>
                            <Divider styleName="section-header" style={{height:70}}>
                                <View style={{flex: 1, flexDirection: 'column'}}>
                                    <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                                    <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                                </View>
                                <TouchableOpacity   onPress={()=> this.gotoLanding()}>
                                    <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                                </TouchableOpacity>
                            </Divider>
                            {/*end Divider*/}
                            {/*start Image*/}
                           
                           
                            
                            {/*end Image*/}
                        </View>
                    </View>
                    
                     <Image
                     style={{alignSelf:'center', marginTop:20}}
                         styleName="medium-avatar"
                         source={require('../assets/img/logo.png')}
                     />
                     </View>
                   
                );
    }
    else{
        return(
            <View>
                 <View style={styles.mainView}>
            <View style={{top:40}}>
                <Divider styleName="section-header" style={{height:70}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                        <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
                    </View>
                    <TouchableOpacity   onPress={()=> this.gotoLanding()}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                    </TouchableOpacity>
                </Divider>
                {/*end Divider*/}
                {/*start Image*/}
                <Image
                style={{alignSelf:'center', marginTop:20}}
                    styleName="medium-avatar"
                    source={require('../assets/img/logo.png')}
                />
                {/*end Image*/}
            
            </View>

            
                { this.state.allData.map((item, index)=>{

                    return   <View style={styles.detailsMainView}>
                                    <View style={styles.detailsColumnView}>
                                        <View  style={styles.detailsColumnMainView}>
                                            <View style={styles.detailsRowView}>
                                                <View style={styles.detailsRowSubOneView}>
                                                    <Text style={styles.detailsTextView}>Name </Text>
                                                </View>
                                                <View style={styles.detailsRowSubTwoView}>
                                                    <Text  style={styles.detailsTextView}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View  style={styles.detailsColumnMainTwoView}>
                                            <View style={styles.detailsRowView}>
                                                <View style={styles.detailsRowSubOneView}>
                                                    <Text style={styles.detailsTextView}>Breed</Text>
                                                </View>
                                                <View style={styles.detailsRowSubTwoView}>
                                                    <Text  style={styles.detailsTextView}>{item.breed}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View  style={styles.detailsColumnMainTwoView}>
                                            <View style={styles.detailsRowView}>
                                                <View style={styles.detailsRowSubOneView}>
                                                    <Text style={styles.detailsTextView}>Gender </Text>
                                                </View>
                                                <View style={styles.detailsRowSubTwoView}>
                                                    <Text  style={styles.detailsTextView}>{item.gender}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View  style={styles.detailsColumnMainTwoView}>
                                            <View style={styles.detailsRowView}>
                                                <View style={styles.detailsRowSubOneView}>
                                                    <Text style={styles.detailsTextView}>D.O.B</Text>
                                                </View>
                                                <View style={styles.detailsRowSubTwoView}>
                                                    <Text  style={styles.detailsTextView}>{item.dateofbirth}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </View>

                                </View>
                        })
                }
            

            </View>
            <View style={{top:(Dimensions.get('window').height-100) ,position:'absolute',height:40, width:250,alignSelf:'center'}}>
                    <Button onPress={()=> this.pastConsult()}>
                        Past Consultant report
                    </Button>
            </View> 
            </View>
            
        

        )

  }
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
detailsRowSubOneView:{width:80, backgroundColor:'#BFC9D2', height:40, top:30},
detailsRowSubTwoView:{width:200, backgroundColor:'#fff', height:40,top:30},
detailsTextView:{alignSelf:'center', top:8}

  
});