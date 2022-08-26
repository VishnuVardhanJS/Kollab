import auth from '@react-native-firebase/auth';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

GoogleSignin.configure({
  webClientId: '150294766809-tgkku60hgbaenjdejej9q3dcqj482jaq.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();

const App = () => {


  const signInAsync = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const googleCreds = auth().signInWithCredential(googleCredential);

    googleCreds.then((user) => { console.log(user) })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.login}>
      <Button title="Google" onPress={() => signInAsync().then(() => console.log())} />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
