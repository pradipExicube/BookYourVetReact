import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
 


 

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
