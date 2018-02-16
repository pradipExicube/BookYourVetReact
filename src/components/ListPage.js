import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
import ActionButton from 'react-native-action-button';
import { Router, Scene } from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';

 

export default class ListPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
    return (
     <View style={styles.mainView}>
         <View style={{top:30}}>
  <Divider styleName="section-header" style={{height:70}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
  <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
  <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
  </View>
  <TouchableOpacity  onPress={()=> this.gotoLanding()}  >
  <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
  </TouchableOpacity>
  
</Divider>


</View>

<View style={{top:40}}>
{/* <ScrollView style={{height:200}}> */}
<TouchableOpacity onPress={()=> this.listClick()}>
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
</TouchableOpacity>
<TouchableOpacity onPress={()=> this.listClick()}>
<Row  style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
</TouchableOpacity >
<TouchableOpacity onPress={()=> this.listClick()}>
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
</TouchableOpacity >
<TouchableOpacity onPress={()=> this.listClick()}>
<Row  style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
</TouchableOpacity >
<TouchableOpacity onPress={()=> this.listClick()}>
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
</TouchableOpacity >
<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={()=> this.gotoAnimalRegister()}
/>
{/* </ScrollView> */}

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
});
