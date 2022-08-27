import auth from '@react-native-firebase/auth';
import React from 'react';
import {Button, StyleSheet, View,Dimensions,TouchableOpacity,Text,Image} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'

GoogleSignin.configure({
  webClientId: '150294766809-tgkku60hgbaenjdejej9q3dcqj482jaq.apps.googleusercontent.com',
});


const Login = ({navigation}) => {


  const signInAsync = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const googleCreds = auth().signInWithCredential(googleCredential);

    googleCreds.then((user) => { console.log(user) })

      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
    <View>
      <View style={styles.imgcont}>
      <Text style={styles.logo}>Kollab</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('select')}>
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:Dimensions.get('window').height,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'

  },
  btn :{
    backgroundColor:'black',
    color:'white',
    marginTop:20,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    padding:10
  },
  logo:{
    fontWeight:'bold',
    fontSize:100,
    color:'white'
  }
  
});

export default Login;
