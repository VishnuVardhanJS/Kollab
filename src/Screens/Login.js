import auth from '@react-native-firebase/auth';
import React from 'react';
import { Button, StyleSheet, View, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'
import SignUp from './SignUp';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgcont}>
          <Text style={styles.logo}>Kollab</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'

  },
  btn: {
    backgroundColor: 'black',
    color: 'white',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 100,
    color: 'white'
  }

});

export default Login;
