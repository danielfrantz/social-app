import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'House Share',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.topBox} >
                    <Image
                        style={styles.homeBanner}
                        source={require('../assets/house.png')}
                    />
                </View>
                <View style={styles.bottomBox} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topBox: {
        flex: 1,
        backgroundColor: '#C0C0C0'
    },
    bottomBox: {
        flex: 2,
        backgroundColor: '#fff'
    },
    homeBanner: {
        bottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    }
});