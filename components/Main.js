import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import getTemp from '../api/getTemp';
import * as actionCreator from '../redux/actionCreator'
import {connect} from 'react-redux'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {cityName: ''}
    }

    getWeatherMessage() {
        const {isLoading,temp,cityName,error} = this.props
        if(isLoading) return '...Loading';
        if(error) return 'vui long thu lai';
        if(!cityName) return 'nhap ten thanh pho cua ban';
        return `${cityName} nhiet do hien tai la ${temp}oC`;
    }

    getTempCityName(){
        const {cityName} = this.state;
        // this.props.startFetch();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName,temp))
        // .catch(() => this.props.fetchError())
        this.props.fetchDataThunk(cityName)
    }

    render() {
        const {container,styleText,textInput,button,txtButton} = styles
        return (
            <View style = {container}>
                <Text style={styleText}>{this.getWeatherMessage()}</Text>
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

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        temp: state.temp,
        error: state.error,
        cityName: state.cityName
    }
}

export default connect(mapStateToProps,actionCreator)(Main)

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
