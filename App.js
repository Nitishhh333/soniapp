import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Footer from "./src/components/Footer.js";
import Login from "./src/components/Login.js";
import Register from "./src/components/Register.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        
        
        <TouchableOpacity style={styles.loginBtn}
        title="Login"
        onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}
        title="Register"
        onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
        <Footer /> 
      </View>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ADD8E6",
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e6e600",
  },
});
