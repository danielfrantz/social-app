import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

export default function ProfileScreen() {



    return (
        <View style={styles.container} >
            <Text>Hi! ProfileScreen</Text>        
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