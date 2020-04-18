import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigation = useNavigation(); 

    function handleLogin() {
        // setEmail(email); //project.api99@gmail.com
        // setPassword(password); //hjgytuyt876885884

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            setErrorMessage(errorMessage)
        });         
    }

    function handleRegister() {
        navigation.navigate('Register'); 
    }

    LayoutAnimation.easeInEaseOut();


 
    return (
        <View style={styles.container} >
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" ></StatusBar>

            <Image
                source={require("./assets/authHeader.png")}
                style={{ marginTop: -50, marginLeft: -10}}
            ></Image>

            <Image
                source={require("./assets/authFooter.png")}
                style={{ position: "absolute", bottom: -5, right: 0 }}
            ></Image>

            <Image
                source={require("./assets/LoginLogo.png")}
                style={{ marginTop: -110, alignSelf: "center" }}
            ></Image>


            <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>

            <View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 32}} >
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        secureTextEntry autoCapitalize="none"
                        onChangeText={text => setPassword(text)}
                        value={password}
                    ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => handleRegister()}>
                <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: -22,
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});