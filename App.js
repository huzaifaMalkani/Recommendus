import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import selectFrom from "./screens/selectForm";

// const homeScreen = () => {
//   return(
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("./Assets/RecommendusLogo.jpeg")} />

//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>As a Vendor</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>As a User</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={selectFrom} />
        <Stack.Screen name = 'vendorLogin' component={VendorLogin}/>
        <Stack.Screen name = 'userLogin' component={userLogin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003638",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 100,
    marginRight: 40,
  },


  loginBtn: {
    width: "70%",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",

    marginBottom: 20,

  }
});

export default App;