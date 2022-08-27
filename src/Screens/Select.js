import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Select = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('join')}>
                <Image source={require("../../assets/Img/list.png")} style={styles.icon}></Image>
                <Text style={styles.Buttontext}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('create')}>
            <Image source={require("../../assets/Img/add.png")} style={styles.icon}></Image>
                <Text style={styles.Buttontext}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        justifyContent:'center',
    },
    Buttontext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 10
    },
    icon: {
        marginTop: 15,
        height: 40,
        width: 40,
    }
})

export default Select