import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, LayoutAnimation } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as firebase from 'firebase';

export default function RegisterScreen() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const navigation = useNavigation(); 

    function handleSignUp() {
        // setEmail("project.api99@gmail.com"); //project.api99@gmail.com
        // setPassword("hjgytuyt876885884"); //hjgytuyt876885884
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            setErrorMessage(errorMessage)
        });

        writeUserData();
       
    }

    function writeUserData() {
        var database = firebase.database();
        database.ref('pots').set('300');

        alert("sucesso");
    }


    function handleLogin() {
        navigation.navigate('Login');
    }

    LayoutAnimation.easeInEaseOut();

    return (
        <View style={styles.container} >
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" ></StatusBar>

            <Image
                source={require("./assets/authHeader.png")}
                style={{ marginTop: 0, marginLeft: -10 }}
            ></Image>

            <Image
                source={require("./assets/authFooter.png")}
                style={{ position: "absolute", bottom: -5, right: 0 }}
            ></Image>

            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
            </TouchableOpacity>

            <View style={{ position: "absolute", top: 64, alignItems: "center", width: "100%"}}>
                <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>
                <TouchableOpacity style={styles.avatar}>
                    <Ionicons name="ios-add" size={30} color="#FFF" ></Ionicons>
                </TouchableOpacity>
            </View>

            <View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={text => setName(text)}
                        value={name}
                    ></TextInput>   
                </View>
                <View style={{ marginTop: 12 }} >
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 12 }} >
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry 
                        autoCapitalize="none"
                        onChangeText={text => setPassword(text)}
                        value={password}
                    ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => handleLogin()}>
                <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
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
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'center',
        color: "#FFF"
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
        marginTop: -12,
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
    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor:"#E1E2E6",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});