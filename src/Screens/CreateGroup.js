import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import firestore from '@react-native-firebase/firestore';
import { setStates } from '../States';



const CreateGroup = ({ navigation }) => {
    const conState = useContext(setStates)
    const dataRef = firestore().collection("kollabs")
    const [addName, setName] = useState('')
    const [addInfo, setInfo] = useState('')
    const [addDomain, setDomain] = useState('')

    const addField = () => {
        if (conState.type == 'faculty') {
            if (addName && addName.length > 0) {
                const data = {
                    domain: addDomain,
                    eventInfo: addInfo,
                    eventName: addName,
                    date: new Date().toLocaleString('en-IN', { hour12: true, hourCycle: 'h12', timeZone: 'Asia/Kolkata' }),
                }
                dataRef.add(data).then(() => {
                    setName('')
                    setDomain('')
                    setInfo('')
                    Keyboard.dismiss()
                }).then(() => navigation.replace('select'))
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                alert('Please fill all the fields')
            }
        } else {
            alert('Only faculty can create a event')
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "#000", flexDirection: 'column' }}>
            <Text style={styles.logo} onPress={() => navigation.replace('select')}>Kollab</Text>
            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.backbtn} onPress={() => navigation.replace('select')}>
                    <Image source={require("../../assets/Img/choice.png")} style={styles.icon}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Event Name"
                        placeholderTextColor={"#aaa"}
                        onChangeText={(heading) => setName(heading)}
                        value={addName} />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter Domain"
                        placeholderTextColor={"#aaa"}
                        onChangeText={(heading) => setDomain(heading)}
                        value={addDomain} />
                    <TextInput
                        style={styles.description}
                        placeholder="Enter Description"
                        placeholderTextColor={"#aaa"}
                        onChangeText={(heading) => setInfo(heading)}
                        value={addInfo} />
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={addField}>
                    <Text style={styles.Buttontext}>Create Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        height: 80,
        width: Dimensions.get('window').width - 50,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: "#fff",
        paddingLeft: 20,
        alignItems: 'center',
        marginBottom: 20
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
    logo: {
        paddingTop: 50,
        fontWeight: 'bold',
        fontSize: 100,
        color: 'white',
    }, icon: {
        position: 'absolute',
        height: 30,
        width: 30,
        marginRight: 20,
        marginTop: 0,
        top: 0,

    },
    backbtn: {

        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        paddingLeft: 20,
        paddingTop: 20

    },
    backContainer: {
        position: 'absolute',
        left: 20,
    }
})

export default CreateGroup