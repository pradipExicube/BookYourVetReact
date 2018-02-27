import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,Picker} from 'react-native';
import { Font } from 'expo';
import {Divider,Card,Subtitle, Image, Caption,Row , ImageBackground,Tile,Title } from '@shoutem/ui';
//import { Image,TextInput} from '@shoutem/ui';
import {Button, Input} from '../components/common';
import {Actions} from 'react-native-router-flux';
import *as firebase from 'firebase';


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
          selectpet:'Select',
          mobileno:'',
          doctor:'',
          selectDoctor:'Select',
          comment:'',
          name:'',
          allData:[],
          newData:[],
           values:[
          
                { "name": "Dr.Sarkar"},
                { "name": "Dr.Mukherjee"},
                {"name": "Dr.Mondal"},
                {"name": "Dr.Sinha"},
                {"name": "Dr.Bishu"},
                {"name": "Dr.SG"},
            
        ]
        } 
      }
      gotoLanding(){
          Actions.Landing();
      }
      clickAppoint(){
        if(this.state.date=="" || this.state.time=="" || this.state.selectpet=="" || this.state.mobileno=="" || this.state.selectDoctor=="" || this.state.comment=="" || 
        this.state.date==undefined || this.state.time==undefined || this.state.selectpet==undefined || this.state.mobileno==undefined || this.state.selectDoctor==undefined || this.state.comment==undefined)
        {
         
     if(this.state.date=="" || this.state.date==undefined){
         alert("please fill the input box1");

     }
     else if(this.state.time=="" || this.state.time==undefined){
        alert("please fill the input box2");

     }
    //  else if(this.state.selectedpet=="" || this.state.selectedpet==undefined){
    //     alert("please fill the input box3");

    //  }
     else if(this.state.mobileno=="" || this.state.mobileno==undefined){
        alert("please fill the input box4");

     }
    //  else if(this.state.doctor=="" || this.state.doctor==undefined){
    //     alert("please fill the input box5");

    //  }
     else if(this.state.comment=="" || this.state.comment==undefined){
        alert("please fill the input box6");

     }
    //  alert("hiiii")
      }

        else{
            alert("hello")
            var data={
                date:this.state.date,
                time:this.state.time,
                selectedpet:this.state.selectpet, 
                mobileno:this.state.mobileno,
                doctor:this.state.selectDoctor,
                comment:this.state.comment,
                // values:this.state.values
        
            }
           
           var newUser=firebase.auth().currentUser;

                    firebase.database().ref('/users/' + firebase.auth().currentUser.uid  + '/bookappoint/').push(data);  
                    alert("successfully submitted") 
        
                
            firebase.database().ref('/BookAppointment/').push(data);
            Actions.ListPage();

           }
         }
      
      componentWillMount(){
          var firebaseData=firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/');
          firebaseData.on('value',(snapshot) =>{
            if(snapshot.val()){
                if(snapshot.val().name){
                    
                    var name=snapshot.val().name;
                    this.setState({ name:name })
                }
              
                 if(snapshot.val().username){
                   
                    var username=snapshot.val().username;
                    
                    this.setState({username:username})
                }
                

            }
            else{
                alert("user not found");
            }  
          })
          
          var firebaseData=firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/mypets/');
          var allPets=[];
          firebaseData.on('value',(snapshot)=>{
            if(snapshot.val()){
                var data = snapshot.val();
                for(let key in data){
                    data[key].petid = key;
                    // alert(key);
                    allPets.push(data[key]);
                }
               this.setState({newData:allPets});  
            }
          })

        }
  render() {
    //const {width,height} = Dimensions.get('window');
    return (
        <View style={styles.mainView}>
        <View style={{top:30}}>
                        <Divider styleName="section-header" style={{height:70}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                        <Caption style={{fontFamily:'ColabReg', fontSize:17}}>Welcome,</Caption>
                        <Caption style={{fontFamily:'ColabReg', fontSize:14}}>{this.state.name}</Caption>
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
                 
                    <View style={{left:20}}>
                   <Text style={{color:"#fff"}}>{this.state.username}</Text>
                    </View>
                    <Input 
                        placeholder="date"
                        onChangeText={text=>this.setState({date:text})}
                    />
                    <Input 
                        placeholder="time"
                        onChangeText={text=>this.setState({time:text})}
    
                     />
 
                    <Input 
                        placeholder="Mobile No"
                        onChangeText={text=>this.setState({mobileno:text})}
                    />

                    <Input 
                        placeholder="Additional Comment"
                        onChangeText={text=>this.setState({comment:text})}
                    />

<View>
     <Picker   style={{backgroundColor:"#fff",marginLeft:20,marginRight:20,height:40,marginTop:5}}
                    selectedValue={this.state.selectpet}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectpet: itemValue})}>
                    <Picker.Item label="Select" value='' />
                    { this.state.newData ? this.state.newData.map((item, index)=>{
                    return<Picker.Item label={item.name} value={item.name} />
                    })
                    :null
                    }

      </Picker>
</View>
<View>
     <Picker   style={{backgroundColor:"#fff",marginLeft:20,marginRight:20,height:40,marginTop:8}}
                    selectedValue={this.state.selectDoctor}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectDoctor: itemValue})}>
                    <Picker.Item label="Select" value='' />
                    {  this.state.values.map((item, index)=>{
                    return<Picker.Item label={item.name} value={item.name} />
                    })
                   
                    }

      </Picker>
</View>

     </View>
     <View style={{top:(Dimensions.get('window').height-100) ,position:'absolute',height:40, width:250,alignSelf:'center'}}>
                            <Button onPress={()=> this.clickAppoint()}>
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
