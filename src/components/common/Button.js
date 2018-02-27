//import a libraries for making a component
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//make a compontent
const Button = ({onPress, children}) =>{
    const { buttonStyle,textStyle } = styles;
   return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
   );

};

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
         backgroundColor:'#4285F4',
        borderRadius:8,
        // borderWidth:1,
        // borderColor:'#007aff',
        //flexDirection:'row',height:50,width:100,alignSelf:'center',backgroundColor:'#4285F4',marginBottom:5,borderRadius:8,
        marginLeft:5,
        marginRight:5
    }
}

export default Button;