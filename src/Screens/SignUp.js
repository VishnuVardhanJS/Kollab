import auth from '@react-native-firebase/auth';
import React, { useState, useContext } from 'react';
import { Button, StyleSheet, View, Dimensions, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Register from '../firebase';
import firestore from '@react-native-firebase/firestore';
import { setStates } from '../States'

const SignUp = ({ navigation }) => {
  const conState = useContext(setStates)
  const dataRef = firestore().collection("users")
  const [checked, setChecked] = React.useState('first');
  const [checked2, setChecked2] = React.useState('first');
  const [Pass, setPass] = useState('')

  // const [name, setName] = useState('')
  // const [Email, setEmail] = useState('')
  // const [field, setField] = useState('')
  // const [type, setType] = useState('')
  // const [id, setId] = useState('')
  

  // function addItem(funcScore) {
  //   //conState.setScore((prevState) => prevState.concat(funcScore))
  //   conState.setScore(funcScore)
  // }

  const addUser_DB = () => {

    if (conState.Email && conState.Email.length > 0) {
      const data = {
        ID: auth().currentUser.uid,
        email: conState.Email,
        field: conState.field,
        type: conState.type,
        date: new Date().toLocaleString('en-IN', { hour12: true, hourCycle: 'h12', timeZone: 'Asia/Kolkata' }),
      }
      dataRef.add(data).then(() => {
        Keyboard.dismiss()
      }).then(() => navigation.replace('Login'))
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const fireRegister = () => {
    Register(conState.Email, Pass).then((res) => {
      console.log(res)
    }).then(addUser_DB()).catch((err) => {
      console.log(err)
    })
  }

  // console.log(Email, Pass, field, type, id)
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kollab</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={"#aaa"}
            onChangeText={(heading) => conState.setName(heading)}
            value={conState.name} />

          <TextInput
            style={styles.input}
            placeholder="ID Number"
            placeholderTextColor={"#aaa"}
            onChangeText={(heading) => conState.setId(heading)}
            value={conState.id} />

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

        {/* Radio-Button-1 */}

        <View style={styles.radio}>
          <Text style={{ color: "white", top: 8, marginLeft: -80 }}> User Type: </Text>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('first'); conState.setType('Student') }}
            color={"#fff"}
            uncheckedColor={"grey"}
          />
          <Text style={styles.radioText}>Student</Text>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('second'); conState.setType('Faculty') }}
            color={"#fff"}
            uncheckedColor={"grey"}
          />
          <Text style={styles.radioText}>Faculty</Text>
        </View>

        {/* Radio-Button-2 */}
        <View style={styles.radio}>
          <Text style={{ color: "white", top: 8, marginLeft: -70 }}>User Field: </Text>
          <RadioButton
            value="first"
            status={checked2 === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked2('first'); conState.setField('Engineering') }}
            color={"#fff"}
            uncheckedColor={"grey"}
          />
          <Text style={styles.radioText}>Engineering</Text>
          <RadioButton
            value="second"
            status={checked2 === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked2('second'); conState.setField('Arts') }}
            color={"#fff"}
            uncheckedColor={"grey"}
          />
          <Text style={styles.radioText}>Arts</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.Buttontext} onPress={fireRegister}>Register</Text>
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

export default SignUp