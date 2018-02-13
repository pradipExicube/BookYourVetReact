import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({lebel, value, onChangeText,placeholder})=> {
    const { containerStyle,textStyle } = styles;
    return (
        <View style={containerStyle}>
            <TextInput
                style={textStyle}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid = "transparent"
            />
        </View>
    )
}

const styles={
    containerStyle: {
       // height:40,
        //flex: 1,
        //width:300,
        backgroundColor:'#fff',
        margin: 3,
        height: 40,
        borderColor: '#b3b3cc',
        borderWidth: 1,
        marginLeft:20,
        marginRight:20
       //flexDirection :'row',
        //alignItems: 'center'
    },
    textStyle:{
        left:5
    }
}
export default Input;