import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
import ActionButton from 'react-native-action-button';
 


 

export default class ListPage extends React.Component {

  render() {
    return (
     <View style={styles.mainView}>
         <View style={{top:30}}>
<Divider styleName="section-header" style={{height:70}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
  <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
  <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
  </View>
  <TouchableOpacity   onPress={this.onPress} >
  <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
  </TouchableOpacity>
  
</Divider>


</View>

<View style={{top:40}}>
{/* <ScrollView style={{height:200}}> */}
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
<Row  style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
<Row  style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>
<Row style={{margin:3}}>
  <Image
    styleName="small rounded-corners"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
  />
  <Title styleName="top" style={{left:110}}>Dog Name </Title>
  <Subtitle >Dog Type</Subtitle>
</Row>

<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { console.log("hi")}}
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
