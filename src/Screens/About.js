import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Kollab</Text>
      <Text style={{fontSize: 30, marginTop: -10}}>(Collaborate with K)</Text>
      <Text style={{justifyContent:'center', alignItems: 'center'}}>Made with ❤️ by Vishnu Vardhan</Text>
    <View style={{flex:1, justifyContent: 'flex-start'}}>
      <Text style={{marginTop:100, fontSize: 50, paddingBottom: 10, color: "#fff"}}>Team Members</Text>
      <Text style={styles.team}>😃 Rishab</Text>
      <Text style={styles.team}>✨ Sivasangaran</Text>
      <Text style={styles.team}>🧠 Ashwin</Text>
      <Text style={styles.team}>🚀 Rajesh</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000",
        width:'100%',
        alignItems:'center',
        height: Dimensions.get('window').height,
    },
    logo:{
        marginTop: 100,
      fontWeight:'bold',
      fontSize:100,
      color:'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    team: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        color: "#fff",
    }
})
export default About