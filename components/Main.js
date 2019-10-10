import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import '../api/getTemp'
import getTemp from '../api/getTemp';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {cityName: ''}
    }

    getTempCityName(){
        const {cityName} = this.state
        getTemp(cityName)
        .then(temp => console.log(temp))
        .catch(err => console.log(err))
    }

    render() {
        const {container,styleText,textInput,button,txtButton} = styles
        return (
            <View style = {container}>
                <Text style={styleText}>Ha noi nhiet do hien tai la 30oC</Text>
                <TextInput
                    style={textInput}
                    value = {this.state.cityName}
                    onChangeText = {text=> this.setState({cityName: text})}
                />
                <TouchableOpacity style={button} onPress = {this.getTempCityName.bind(this)}>
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
