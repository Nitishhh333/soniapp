import {  Text, View } from "react-native";
export default function Footer() {
  return (
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <Text style={{textAlign: "center",padding: 10,backgroundColor: "#f2f2"}}>Copyright 2023</Text>
    </View>  
  );
}
