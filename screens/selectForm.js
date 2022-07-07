import React from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import VendorLogin from './VendorLogin'
import UserLogin from './UserLogin'
 
const SelectFrom = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Assets/RecommendusLogo.jpeg")} />
    
      <TouchableOpacity onPress={() =>{
        navigation.navigate(VendorLogin)
      }} style={styles.loginBtn}>
        <Text style={styles.loginText}>As a Vendor</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() =>{
        navigation.navigate(UserLogin)
      }} style={styles.loginBtn}>
        <Text style={styles.loginText}>As a User</Text>
      </TouchableOpacity>
    </View>

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

export default SelectFrom;