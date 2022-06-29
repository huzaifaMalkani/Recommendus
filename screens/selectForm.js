import React from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import vendorLogin from './vendorLogin'
import userLogin from './userLogin'
 
const selectFrom = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../Assets/RecommendusLogo.jpeg")} /> */}

      <TouchableOpacity onPress={() =>{
        navigation.navigate(vendorLogin)
      }} style={styles.loginBtn}>
        <Text style={styles.loginText}>As a Vendor</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() =>{
        navigation.navigate(userLogin)
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

export default selectFrom;