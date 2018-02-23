import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity} from 'react-native';
 import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
 import { Button} from '../components/common';
 import {Actions} from 'react-native-router-flux';
 import { Router, Scene } from 'react-native-router-flux';
 import Landing from '../components/Landing';
 import BookAppointment from '../components/BookAppointment';
 import Reminder from '../components/Reminder';
 
//  import { Router, Scene } from 'react-native-router-flux';

export default class Home extends React.Component {
    static navigationOptions = {
       
        header: null,
      };
      gotoLanding(){
          Actions.Landing();
      }
      gotoListPage(){
          Actions.ListPage();
      }
      gotoBookAppointment(){
          Actions.BookAppointment();
          }
          clickReminder(){
            Actions.Reminder();
          }
  render() {
    return (
        <View  style={styles.mainView}>
   
    
 <View style={{top:30}}>
     <Divider styleName="section-header" style={{height:70}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
            </View>
   <TouchableOpacity   onPress={()=> this.gotoLanding()}  >
          <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
    </TouchableOpacity>
  
    </Divider>
        <View  style={styles.ownView}>
        </View>
</View>

<View style={{top:30}}>
    <View style={{width:Dimensions.get('window').width,height:((Dimensions.get('window').height-110)/3) }}>
        <ImageBackground
                        styleName="large-banner"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                        >
                        <Tile>
                        <TouchableOpacity    onPress={()=> this.gotoListPage()} >
                        <Title styleName="md-gutter-bottom" style={{fontFamily:'ColabReg', fontSize:30}}>My Pets</Title>
                        </TouchableOpacity>
                        </Tile>
        </ImageBackground>
      </View>
        <View style={{height:5, backgroundColor:'#fff'}}>
        </View>

        <View style={{width:Dimensions.get('window').width,height:((Dimensions.get('window').height-110)/3) }}>
        <ImageBackground
                        styleName="large-banner"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                        >
                        <Tile>
                        <TouchableOpacity   onPress={()=> this.gotoBookAppointment()}>
                        <Title styleName="md-gutter-bottom" style={{fontFamily:'ColabReg', fontSize:30}}>Book Appointment</Title>
                        </TouchableOpacity>
                        </Tile>
        </ImageBackground>
      </View>
      <View style={{height:5, backgroundColor:'#fff'}}>
      </View>

        <View style={{width:Dimensions.get('window').width,height:((Dimensions.get('window').height-110)/3) }}>
        <ImageBackground
                        styleName="large-banner"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                        >
                        <Tile>
                        <TouchableOpacity   onPress={()=>this.clickReminder()} >
                        <Title styleName="md-gutter-bottom" style={{fontFamily:'ColabReg', fontSize:30}}>Reminder / Notification</Title>
                        </TouchableOpacity>
                        </Tile>
        </ImageBackground>
      </View>
      <View style={{height:5, backgroundColor:'#fff'}}>
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
  viewCaption:{
      fontFamily:'Rubik-Regular'
  },
  ownView:{ 
    
  },
  imageView:{
    top:50,
    margin:30
  }
});
