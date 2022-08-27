import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FlipCard from './FlipCard'


const Home = ({navigation}) => {
    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style={styles.logo} onPress={() => navigation.replace('about')}>Kollab</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('select')}>
                <Image source={require("../../assets/Img/choice.png")} style={styles.icon}></Image>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <FlipCard />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    card: {
        height: 300,
        width: 300
    },
    container: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        paddingLeft: 20,
        paddingTop: 20
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 20,
        marginTop: 28
    }

})

export default Home