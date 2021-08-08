import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Dimensions} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') 
export default class Login extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image source = {require('../images/image.jpg')} 
                style = {{width:"100%", height:"40%"}}  />
            <Text style={styles.fontText}>Book App</Text>
            <View style={styles.form}>
            <TextInput style={styles.emailText} placeholder={'Email'} 
                        placeholderTextColor={'rgba(0,0,7)'}
                        underlineColorAndroid='transparent' /></View>

            <View style={styles.form}>
            <TextInput style={styles.passText} placeholder={'Password'} 
                        placeholderTextColor={'rgba(0,0,255)'}
                        underlineColorAndroid='transparent' /></View>

            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff',
        height:"100%",
        justifyContent: "center",
        
    },
    fontText: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 0.5,
    },
    emailText: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginHorizontal: 25,
    },
    form:{
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 23,
    },
    passText: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginHorizontal: 25,
    }
})