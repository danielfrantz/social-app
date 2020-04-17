import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

export default function LoadingScreen() {    

    const navigation = useNavigation(); 

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login');
        }
    });


    return (
        <View style={styles.container} >
            <Text>Loading...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
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