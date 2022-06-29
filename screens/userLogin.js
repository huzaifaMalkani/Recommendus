import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,} from "react-native";
import { NavigationContainer } from '@react-navigation/native'; 

const userLogin = ({navigation}) => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require(".")} />
      <Text style={styles.text}> User </Text>

      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup_button}>Not a member? Signup now </Text>
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
    marginBottom: 40,
    marginRight: 40,
  },
 
  inputView1: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  inputView2: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
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
   height: 45,
   fontSize: 25
 },
  forgot_button: {
    height: 30,
   
    marginBottom: 30,
    justifyContent: "flex-end",
    marginLeft: 100,
    color: "#F0A082",
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 30,
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
export default userLogin;