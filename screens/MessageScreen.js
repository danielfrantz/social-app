import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

export default function MessageScreen() {

 

    return (
        <View style={styles.container} >
            <View style={styles.container} >
                <Text>Hi! MessageScreen</Text>
            </View>
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