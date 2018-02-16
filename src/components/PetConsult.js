import React from 'react';
import { StyleSheet, Text, View,TextInput,Dimensions,TouchableOpacity } from 'react-native';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title,DropDownMenu } from '@shoutem/ui';
 //import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import {Input,Button} from '../components/common';
import { Actions } from 'react-native-router-flux';

export default class PetConsult extends React.Component {
    static navigationOptions = {
     
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
          name:'',
          type:'',
          gender:'',
         dateofbirth:'',
         
        }
      }
      gotoLanding(){
          Actions.Landing();
      }
  render() {
    return (

        <View style={styles.mainView}>
            {/*Devider*/}
            <View style={{top:30}}>
                <Divider styleName="section-header" style={{height:70}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                        <Caption style={{fontFamily:'ColabReg', fontSize:14}}>Pradip647</Caption>
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

            <View style={styles.detailsMainView}>
                <View style={styles.detailsColumnView}>
                    <View  style={styles.detailsColumnMainView}>
                        <View style={styles.detailsRowView}>
                            <View style={styles.detailsRowSubOneView}>
                                <Text style={styles.detailsTextView}>Name </Text>
                            </View>
                            <View style={styles.detailsRowSubTwoView}>
                                <Text  style={styles.detailsTextView}>Name of the Pet</Text>
                            </View>
                        </View>
                    </View>
                    <View  style={styles.detailsColumnMainTwoView}>
                        <View style={styles.detailsRowView}>
                            <View style={styles.detailsRowSubOneView}>
                                <Text style={styles.detailsTextView}>Type </Text>
                            </View>
                            <View style={styles.detailsRowSubTwoView}>
                                <Text  style={styles.detailsTextView}>Type of the pet</Text>
                            </View>
                        </View>
                    </View>
                    <View  style={styles.detailsColumnMainTwoView}>
                        <View style={styles.detailsRowView}>
                            <View style={styles.detailsRowSubOneView}>
                                <Text style={styles.detailsTextView}>Gender </Text>
                            </View>
                            <View style={styles.detailsRowSubTwoView}>
                                <Text  style={styles.detailsTextView}>Gender of Pet</Text>
                            </View>
                        </View>
                    </View>
                    <View  style={styles.detailsColumnMainTwoView}>
                        <View style={styles.detailsRowView}>
                            <View style={styles.detailsRowSubOneView}>
                                <Text style={styles.detailsTextView}>D.O.B</Text>
                            </View>
                            <View style={styles.detailsRowSubTwoView}>
                                <Text  style={styles.detailsTextView}>Date of birth</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* <View style={{marginTop:50}}>
                        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:80, backgroundColor:'#FF0000', height:40, top:30}}>
                                <Text style={{alignSelf:'center', top:8}}>Type </Text>
                            </View>
                            <View style={{width:200, backgroundColor:'#fff', height:40,top:30}}>
                                <Text  style={{alignSelf:'center', top:8}}>Pet type</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:50}}>
                        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:80, backgroundColor:'#FF0000', height:40, top:30}}>
                                <Text style={{alignSelf:'center', top:8}}>gender </Text>
                            </View>
                            <View style={{width:200, backgroundColor:'#fff', height:40,top:30}}>
                                <Text  style={{alignSelf:'center', top:8}}>Pet gender</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:50}}>
                        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:80, backgroundColor:'#FF0000', height:40, top:30}}>
                                <Text style={{alignSelf:'center', top:8}}>D.O.B </Text>
                            </View>
                            <View style={{width:200, backgroundColor:'#fff', height:40,top:30}}>
                                <Text  style={{alignSelf:'center', top:8}}>Pet D.O.B</Text>
                            </View>
                        </View>
                    </View> */}




                </View>

            </View>
            <View style={{top:(Dimensions.get('window').height-120) ,position:'absolute',height:40, width:250,alignSelf:'center'}}>
                        <Button onPress={()=> this.gotoHome()}>
                            Past Consultant report
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
