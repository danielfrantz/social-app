import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Permissions from "expo-permissions";
import Fire from "../Fire";
import * as ImagePicker from "expo-image-picker";

import * as firebase from 'firebase';

export default function PostScreen() {
  
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
  
    useEffect(() => {
        async function LoadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
            }

        }

        LoadInitialPosition();
    }, []);  

    // getPhotoPermission = async () => {
    //     if (Constants.platform.ios) {
    //         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    //         if (status != "granted") {
    //             alert("We need permission to access your camera roll");
    //         }
    //     } else {
    //         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    //         if (status != "granted") {
    //             alert("We need permission to access your camera roll");
    //         }
    //     }
    // }

    // async function alertIfRemoteNotificationsDisabledAsync() {
    //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //     if (status !== 'granted') {
    //         alert('Hey! You might want to enable notifications for my app, they are good.');
    //     }
    // }

    // pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4,3]
    //     })

    //     if (result.cancelled) {
    //         setImage(result.uri);
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ fontWeight: "500", marginTop: 32 }}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer} >
                <Image source={require("../screens/assets/tempAvatar.png")} style={styles.avatar}></Image>
                
                <TextInput
                    autoFocus={true}
                    multiline={true}
                    numberOfLines={4}
                    style={{ flex: 1 }}
                    placeholder="Want to share something"                    
                ></TextInput>
            </View>
            
            <TouchableOpacity style={styles.photo} onPress={() => pickImage()}>
                <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>  
            </TouchableOpacity> 
            <View style={{ marginHorizontal: 32, marginTop: 32, height: 150}} >
                    <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }}></Image>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 26
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32
    }
});