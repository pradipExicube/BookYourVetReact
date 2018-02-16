import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Picker} from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
import {Button, Input} from '../components/common'; 
import {Actions} from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';


 

export default class AnimalRegister extends React.Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          name:'',
          species:'',
          gender:'',
          breed:'',
          dateofbirth:'',
          otherinfo:'',
         
        }
       
      }
      logOut(){
          Actions.Landing();
      }
      submitClick(){
        Actions.ListPage();
    }
    cancelClick(){
        Actions.pop();
    }

  render() {
    let data = [{
        value: 'Male',
      }, {
        value: 'Female',
      }, 
    ];
    return (
     <View style={styles.mainView}>
         <View style={{top:30}}>
<Divider styleName="section-header" style={{height:70}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
  <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
  <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
  </View>
  <TouchableOpacity  onPress={()=> this.logOut()} >
  <Caption style={{fontFamily:'ColabReg', fontSize:18}}>Logout</Caption>
  </TouchableOpacity>
  
</Divider>

</View>
<View>
<View style={styles.imageView}>
                    <Image
                         styleName="medium-avatar"
                        source={require('../assets/img/logo.png')}
                    />
                </View>

</View>
<View style={{top:60}}>
                    <Input 
                        placeholder="Name"
                        onChangeText={text=>this.setState({name:text})}
                    />


                    <Input 
                        placeholder="Species"
                        onChangeText={text=>this.setState({species:text})}
                    />
                     <Input
                        placeholder="Gender"
                        onChangeText={text=>this.setState({gender:text})}
                     />
                     
                    <Input 
                        placeholder="Breed"
                        onChangeText={text=>this.setState({breed:text})}
                    />
                    <Input 
                        placeholder="D.O.B"
                        onChangeText={text=>this.setState({dateofbirth:text})}
                    />
                    <Input 
                        placeholder="Other Information"
                        onChangeText={text=>this.setState({otherinfo:text})}
                    />
                    <View style={{flex: 1, flexDirection: 'row', left:5, top:15,alignSelf:'center'}}>
                    <View style={{width: 100, height: 50}} >
                      <Button onPress={()=> this.submitClick()} >
                          Submit
                      </Button>
                      </View>
                      <View style={{width:100, height: 50,}} >
                      <Button onPress={()=> this.cancelClick()}>
                        Cancel
                      </Button>
                      </View>

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
  imageView:{
      top:50,
      alignSelf:'center'
    }
});
