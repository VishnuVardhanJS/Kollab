import firestore from '@react-native-firebase/firestore';
import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Register = async (email, password) => {
  try {
    auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    console.log(error)
  }
    
}

export default Register