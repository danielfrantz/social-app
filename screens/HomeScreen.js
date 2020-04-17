import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as firebase from 'firebase';

export default function HomeScreen() {

    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");

    
    // useEffect(() => {
    //     setEmail(firebase.auth().currentUser);
    //     setDisplayName(firebase.auth().currentUser);
    // }, [])

    function signOutUser() {
        firebase.auth().signOut();
    }


    return (
        <View style={styles.container} >
            <Text>Hi {email}!</Text>

            <TouchableOpacity style={{ marginTop: 32 }} onPress={signOutUser} >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});