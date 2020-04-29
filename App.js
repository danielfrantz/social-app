import * as React from 'react';
import FirebaseKeys from "./config";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import PostScreen from "./screens/PostScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Camerascreen from "./screens/Camerascreen";
import MediaLibraryScreen from "./screens/MediaLibraryScreen";

import * as firebase from 'firebase';

var firebaseConfig = FirebaseKeys;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#161F3D',
        inactiveTintColor: '#B8BBC4',
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ tinColor }) => <Ionicons name="ios-home" size={24} color={tinColor}></Ionicons> }}  />
      <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarIcon: ({ tinColor }) => <Ionicons name="ios-chatboxes" size={24} color={tinColor}></Ionicons> }} />
      <Tab.Screen name="Post" component={PostScreen} 
        options={{ tabBarIcon: ({ tinColor }) => 
          <Ionicons 
            name="ios-add-circle" 
            size={48}
            color="#E9446A"
            style={{
              shadowColor: "#E9446A",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 10,
              shadowOpacity: 0.3
            }}

          ></Ionicons> }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarIcon: ({ tinColor }) => <Ionicons name="ios-notifications" size={24} color={tinColor}></Ionicons> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ tinColor }) => <Ionicons name="ios-person" size={24} color={tinColor}></Ionicons> }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MediaLibrary" component={MediaLibraryScreen} />
        <Stack.Screen name="Camera" component={Camerascreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}