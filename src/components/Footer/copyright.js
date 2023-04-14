import {  Text, View } from "react-native";
function Copyright() {
  return (
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <Text
      style={{textAlign: "center",padding: 10,backgroundColor: "#0079ad", color:"#fff"}}>
        Copyright 2023
      </Text>
    </View>  
  );
}
export default Copyright;
