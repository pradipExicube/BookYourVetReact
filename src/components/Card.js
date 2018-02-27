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
  render() {
   
return (      
<View style={styles.mainView}>
   <View style={{top:45}}>   
       
           <View style={{height:250,width:Dimensions.get('window').width-40, backgroundColor:'#fff', borderRadius:15,marginLeft:15,borderWidth:2,borderBottomWidth:1,borderColor:'#7c313e'}}>
              
                <View style={{borderBottomColor:'#7A2727',borderWidth:2,borderColor:'#fff',borderRadius:10}}>
                    <Text style={{alignSelf:'center',color:'#7c313e',fontSize:25,fontWeight: 'bold'}}>TREATMENT</Text>   
                </View>       
                             
                           <View style={{ top:30}}>
                                    <View style={{flexDirection:'row'}}>
                                    <Icon size={35}    color='#7c313e' name='user'/>
                                    <Text style={{fontSize:20,color:'#000',fontWeight: 'bold'}}>NAME:SHYAMAL</Text>
                                    </View>
                                    <View style={{flexDirection:'row',top:6}}>
                                    <Icon size={30} color='#7c313e' name='calendar'/>
                                    <Text style={{fontSize:20,color:'#000',fontWeight: 'bold',top:4}}>DATE:27.2.2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',top:12}}>
                                    <Icon size={30} color='#7c313e' name='clock-o'/>
                                    <Text style={{fontSize:20,color:'#000',fontWeight: 'bold',top:6}}>TIME:7.15PM</Text>
                                    </View>
                                    <View style={{flexDirection:'row',top:14}}>
                                    <Icon size={38}  color='#7c313e' name='mobile-phone'/>  
                                    <Text style={{fontSize:20,color:'#000',fontWeight: 'bold',top:8}}>MOBILE:9876543210</Text>
                                    </View>
                            </View>                   
            </View>   
      
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