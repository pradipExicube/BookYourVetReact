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
          selectpet:'',
          mobileno:'',
          doctor:'',
          comment:'',
          name:'',
          allData:[],
          newData:[]
          
        }
       
      }
      gotoLanding(){
          Actions.Landing();
      }
      clickAppoint(){
        if(this.state.date=="" || this.state.time=="" || this.state.selectpet=="" || this.state.mobileno=="" || this.state.doctor=="" || this.state.comment=="" || 
        this.state.date==undefined || this.state.time==undefined || this.state.selectpet==undefined || this.state.mobileno==undefined || this.state.doctor==undefined || this.state.comment==undefined){
         
     if(this.state.date=="" || this.state.date==undefined){
         alert("please fill the input box");

     }
     else if(this.state.time=="" || this.state.time==undefined){
        alert("please fill the input box");

     }
     else if(this.state.selectpet=="" || this.state.selectpet==undefined){
        alert("please fill the input box");

     }
     else if(this.state.mobileno=="" || this.state.mobileno==undefined){
        alert("please fill the input box");

     }
     else if(this.state.doctor=="" || this.state.doctor==undefined){
        alert("please fill the input box");

     }
     else if(this.state.comment=="" || this.state.comment==undefined){
        alert("please fill the input box");

     }
     
        }
        else{
            var data={
                date:this.state.date,
                time:this.state.time,
                selectpet:this.state.selectpet, 
                mobileno:this.state.mobileno,
                doctor:this.state.doctor,
                comment:this.state.comment,
        
            }
           var newUser=firebase.auth().currentUser;

                    firebase.database().ref('/users/' + firebase.auth().currentUser.uid  + '/bookappoint/').push(data);  
                    alert("successfully submitted") 
        

            firebase.database().ref('/BookAppointment/').push(data);

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
          firebaseData.on('value',(snapshot)=>{
            if(snapshot.val()){
                var data = snapshot.val();
                for(let key in data){
                    data[key].petid = key;
                    allPets.push(data[key]);
                }
                console.log(allPets);
                alert(allPets[0].name)
               this.setState({newData:allPets}); 
                // this.setState({allData:allPets});
                //alert(allData)
            }
          })

          var allPets=[];
      
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
                 
    
                   <Text>{this.state.username}</Text>
                    
                    <Input 
                        placeholder="date"
                        onChangeText={text=>this.setState({date:text})}
                    />
                    <Input 
                        placeholder="time"
                        onChangeText={text=>this.setState({time:text})}
                    />

<Picker
  selectedValue={this.state.doctor}
  onValueChange={(itemValue, itemIndex) => this.setState({doctor: itemValue})}>
  <Picker.Item label="Select" value='' />
  { this.state.newData ? this.state.newData.map((item, index)=>{
        return<Picker.Item label={item.name} value={item.name} />
})
:null
}

</Picker>



                   
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
