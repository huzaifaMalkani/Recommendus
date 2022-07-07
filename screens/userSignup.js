import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import UserLogin from './UserLogin'

const UserSignup = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Assets/RecommendusLogo.jpeg")} />
      <Text style={styles.text}> User </Text>
     
      <View>
      <Text style={styles.inputView1}>Name</Text>
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View>
      <Text style={styles.inputView1}>Email</Text>
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View>
      <Text style={styles.inputView1}>Password</Text>
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View>
      <Text style={styles.inputView1}>Confirm Password</Text>
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </View>

      <View>
      <Text style={styles.inputView1}>Phone Number</Text>
      </View>
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(phoneNumber) => setphoneNumber(phoneNumber)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
        navigation.navigate(UserLogin)}}>
        <Text style={styles.signup_button}>Already Member? Login now </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
    marginBottom: 40,
    marginRight: 40,
  },
 
  inputView1: {
    color: "#F0A082",
    fontSize: 20,
  },
 
  inputView2: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 30,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  text: {
   color: "#F0A082",
   height: 100,
   fontSize: 35
 },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  signup_button: {
    height: 30,
    marginTop: 20,
    marginBottom: 10,
    color: "#F0A082",
  }
});

export default UserSignup;