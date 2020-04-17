import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBvC5Y5r6kfNwCCHgXU3bX03AtuK0mF-7k",
  authDomain: "anthem-log.firebaseapp.com",
  databaseURL: "https://anthem-log.firebaseio.com",
  projectId: "anthem-log",
  storageBucket: "anthem-log.appspot.com",
  messagingSenderId: "373659832607",
  appId: "1:373659832607:web:bcc214a7eaa7a1e335e02a",
  measurementId: "G-4QFEDEK3PF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;