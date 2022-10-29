import { Button, StyleSheet, View, Dimensions, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
import React, {useContext} from 'react'
import { setStates } from '../States'
import firestore from '@react-native-firebase/firestore';

const SignIn = ({ navigation }) => {
    const conState = useContext(setStates)
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Kollab</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={"#aaa"}
                        onChangeText={(heading) => conState.setEmail(heading)}
                        value={conState.Email} />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={"#aaa"}
                        onChangeText={(heading) => conState.setPass(heading)}
                        value={conState.Pass} />
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.Buttontext} onPress={() => navigation.replace('select')}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
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
    },
    inputBox: {
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
  
    },
    formContainer: {
      width: '100%',
      height: 500,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 48,
      width: Dimensions.get('window').width - 50,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: "#fff",
      paddingLeft: 20,
      alignItems: 'center',
      marginBottom: 20
    },
    button: {
      height: 47,
      borderRadius: 5,
      backgroundColor: "#788eec",
      width: 80,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: "#fff",
      fontSize: 20
    },
    btn: {
      backgroundColor: 'black',
      color: 'white',
      marginTop: 20,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 20,
      width: 185,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    Buttontext: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      padding: 10
    },
    radio: {
      display: 'flex',
      flexDirection: 'row',
  
    },
    radioText: {
      color: 'white',
      top: 8
    }
  
  });

export default SignIn