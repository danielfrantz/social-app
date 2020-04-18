// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from "@expo/vector-icons";

// import LoadingScreen from "./screens/LoadingScreen";
// import TabNavigation from "./screens/TabNavigation";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";

// import HomeScreen from "./screens/HomeScreen";
// import MessageScreen from "./screens/MessageScreen";
// import PostScreen from "./screens/PostScreen";
// import NotificationScreen from "./screens/NotificationScreen";
// import ProfileScreen from "./screens/ProfileScreen";

// import * as firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyBvC5Y5r6kfNwCCHgXU3bX03AtuK0mF-7k",
//     authDomain: "anthem-log.firebaseapp.com",
//     databaseURL: "https://anthem-log.firebaseio.com",
//     projectId: "anthem-log",
//     storageBucket: "anthem-log.appspot.com",
//     messagingSenderId: "373659832607",
//     appId: "1:373659832607:web:bcc214a7eaa7a1e335e02a",
//     measurementId: "G-4QFEDEK3PF"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // const AppTabNavigator = createBottomTabNavigator(
// //   {
// //     Home: {
// //       Screen: HomeScreen,
// //       navigationOptions: {
// //         tabBarIcon: ({ tinColor }) => <Ionicons name="ios-home" size={24} color={tinColor}></Ionicons>
// //       }
// //     }
// //   }
// // );

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="TabNavigation" component={TabNavigation} />
//                 <Stack.Screen name="Loading" component={LoadingScreen} />
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="Register" component={RegisterScreen} />
//                 <Stack.Screen name="Home" component={HomeScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;