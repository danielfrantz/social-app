import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         // User is signed in.
        //         var displayName = user.displayName;
        //         var email = user.email;
        //         var emailVerified = user.emailVerified;
        //         var photoURL = user.photoURL;
        //         var isAnonymous = user.isAnonymous;
        //         var uid = user.uid;
        //         var providerData = user.providerData;
        //         // ...
        //     } else {
        //         // User is signed out.
        //         // ...
        //     }
        // });


    }

    function handleLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container} >
            <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>

            <View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={text => setName(text)}
                        value={name}
                        placeholder="enter here"
                    ></TextInput>
                </View>
                <View style={{ marginTop: 32 }} >
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 32 }} >
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