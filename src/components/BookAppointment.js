import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,} from 'react-native';
import { Font } from 'expo';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
//import { Image,TextInput} from '@shoutem/ui';
import {Button, Input} from '../components/common';
import {Actions} from 'react-native-router-flux';


export default class BookAppointment extends React.Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          username:'',
          date:'',
          time:'',
          selectpet:'',
          mobileno:'',
          doctor:'',
          comment:''
        }
       
      }
      gotoLanding(){
          Actions.Landing();
      }
      gotoListPage(){
          Actions.ListPage();
      }
  render() {
    //const {width,height} = Dimensions.get('window');
    return (
        <View style={styles.mainView}>
        <View style={{top:30}}>
                <Divider styleName="section-header" style={{height:70}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                        <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
                    </View>
                    <TouchableOpacity   onPress={()=> this.gotoLanding()} >
                        <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
                    </TouchableOpacity>
                </Divider>
                </View>
                
                <View style={{top:40, height:40, width:Dimensions.get('window').width, borderWidth:0.5,borderBottomColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{alignSelf:'center', marginTop:5,color:'#fff',fontSize:20}}>Book Appointment</Text>
                </View>
                <View style={{top:50}}>
                    <Input 
                        placeholder="User Name"
                        onChangeText={text=>this.setState({username:text})}
                    />
                    <Input 
                        placeholder="date"
                        onChangeText={text=>this.setState({date:text})}
                    />
                    <Input 
                        placeholder="time"
                        onChangeText={text=>this.setState({time:text})}
                    />
                    <Input 
                        placeholder="Select pet"
                        onChangeText={text=>this.setState({selectpet:text})}
                    />
                    <Input 
                        placeholder="Mobile No"
                        onChangeText={text=>this.setState({mobileno:text})}
                    />
                    <Input 
                        placeholder="Preferred Doctor"
                        onChangeText={text=>this.setState({doctor:text})}
                    />
                    <Input 
                        placeholder="Additional Comment"
                        onChangeText={text=>this.setState({comment:text})}
                    />
                </View>
                <View style={{top:(Dimensions.get('window').height-120) ,position:'absolute',height:40, width:250,alignSelf:'center'}}>
                        <Button onPress={()=> this.gotoListPage()}>
                            Request Appointment
                        </Button>
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
  imageView:{
      top:20,alignSelf:'center'
    },
    mainView:{
        backgroundColor:'#6D60E8',
    height:Dimensions.get('window').height

    }

  });
