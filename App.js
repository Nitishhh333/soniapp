import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Footer from "./src/components/Footer.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Main Page!!</Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
