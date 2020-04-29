import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as firebase from 'firebase';
import moment from "moment";

posts = [
    {
        id: "1",
        name: "Joe Mackey",
        text: 
        "Implementar a API de solicitação de pagamento em um projeto Explore algumas das opções para personalizá-lo para um projeto",
        timestamp: 1587340800,
        avatar: require("./assets/tempAvatar.png"),
        image: require("./assets/post-1-image.jpg")
    },
    {
        id: "2",
        name: "Karyn Kim",
        text:
            "Implementar a API de solicitação de pagamento em um projeto Explore algumas das opções para personalizá-lo para um projeto",
        timestamp: 1563753600,
        avatar: require("./assets/tempAvatar.png"),
        image: require("./assets/post-2-image.jpg")
    },
    {
        id: "3",
        name: "Joe Mackey",
        text:
            "Implementar a API de solicitação de pagamento em um projeto Explore algumas das opções para personalizá-lo para um projeto",
        timestamp: 1563753600,
        avatar: require("./assets/tempAvatar.png"),
        image: require("./assets/post-3-image.jpg")
    },
    {
        id: "4  ",
        name: "Joe Mackey",
        text:
            "Implementar a API de solicitação de pagamento em um projeto Explore algumas das opções para personalizá-lo para um projeto",
        timestamp: 1563753600,
        avatar: require("./assets/tempAvatar.png"),
        image: require("./assets/post-1-image.jpg")
    },
]

export default function HomeScreen() {

    const navigation = useNavigation(); 

    function signOut() {
        firebase.auth().signOut();
        navigation.navigate('Login');
    }

    renderPost = post => {
        return(
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>
                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} />

                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Feed</Text>
                <TouchableOpacity style={styles.back} onPress={() => signOut()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.feed}
                data={posts}
                renderItem={({ item }) => renderPost(item)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65",
        marginTop: 4
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
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
    }
});