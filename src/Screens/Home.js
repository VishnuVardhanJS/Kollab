import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React from 'react'
import FlipCard from '../Components/FlipCard'


const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlipCard />
                <FlipCard />
                <FlipCard />
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
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default Home