import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, View, Dimensions} from 'react-native';

const { width: WIDTH } = Dimensions.get('window') 
export default class Login extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView style={styles.container}>
                <Image source = {require('../images/image.jpg')} 
                style = {{width:"100%", height:"40%"}}  />
            <Text style={styles.fontText}>Book App</Text>
            <View style={styles.form}>
            <TextInput style={styles.emailText} placeholder={'Email'} 
                        underlineColorAndroid='transparent' /></View>

            <View style={styles.form}>
            <TextInput style={styles.passText} placeholder={'Password'} 
                        underlineColorAndroid='transparent'  secureTextEntry /></View>
            <View style={styles.login}>
                <Text style={styles.test}>       Login</Text>
            </View>
            <View style={styles.login}><Text style={styles.test} onPress={()=>navigate ('Register')}>     Register</Text>
            </View>

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
        fontSize: 18,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginTop: 25,
        backgroundColor: "#00716f",
        marginHorizontal: 25,
        borderRadius: 25,
        borderColor: '#4287f5',
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
        backgroundColor: "#00716f",
        fontSize: 18,
        paddingLeft: 45,
        paddingHorizontal: 10,
        color: "black",
        marginHorizontal: 25,
        marginTop: 15,
    },
    login:{
        marginHorizontal: 25,
        borderRadius: 25,
        borderColor: '#4287f5',
        marginTop: 25,
        backgroundColor: "#8d42f5",
        height: 50,
        width: 200,
        paddingLeft: 45,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 19,
        fontWeight: "bold",
        marginTop: 15,
    },
    test: {
        justifyContent: "center",
        fontSize: 19,
        fontWeight: "bold",
    }
})