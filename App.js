
import React from "react";
import { Login, Register, LoginPage, Forgetpassword } from "./src/components/MainContent";
import { Copyright } from "./src/components/Footer";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AntDesign from '@expo/vector-icons/AntDesign';

import Footer from './src/components/Footer.jsx';
// import Login from "./src/components/Login.js";
// import Register from "./src/components/Register.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget Password" component={Forgetpassword} />

      </Stack.Navigator>
      <Copyright /> 
    </NavigationContainer>
    
  );
}


