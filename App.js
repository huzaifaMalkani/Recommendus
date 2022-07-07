import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectFrom from "./screens/SelectForm";
import VendorLogin from "./screens/VendorLogin";
import UserLogin from "./screens/UserLogin";
import UserSignup from './screens/UserSignup'
import VendorSignup from './screens/VendorSignup'

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
        <Stack.Screen name = 'Home' component={SelectFrom} />
        <Stack.Screen name = 'VendorLogin' component={VendorLogin}/>
        <Stack.Screen name = 'UserLogin' component={UserLogin}/>
        <Stack.Screen name = 'UserSignup' component={UserSignup}/>
        <Stack.Screen name = 'VendorSignup' component={VendorSignup}/>
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