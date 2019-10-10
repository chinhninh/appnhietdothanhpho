import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,TextInput } from 'react-native'

export default class Main extends Component {
    render() {
        const {container,styleText,textInput,button,txtButton} = styles
        return (
            <View style = {container}>
                <Text style={styleText}>Ha noi nhiet do hien tai la 30oC</Text>
                <TextInput
                    style={textInput}
                />
                <TouchableOpacity style={button}>
                    <Text style={txtButton}>Lay nhiet do</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleText: {
        fontSize: 20
    },
    textInput:{
        height:40,
        width:200,
        backgroundColor:'white',
        margin:10
    },
    txtButton:{
        fontSize: 20,
        padding: 5
    },
    button:{
        backgroundColor:'red',
        marginTop:10,
        borderRadius:5
    }
})
