import React, { useState, useEffect, componentDidMount } from 'react';
import { View, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';

const SampleData = [
  { groupName: "Chat App with React Native", groupDomain: "React Native", groupInfo: "Simple chat app made with React Native and Socker.io" },
  { groupName: "Music Direction", groupDomain: "Song", groupInfo: "Recording and music jam" },
  { groupName: "Portrait", groupDomain: "Art", groupInfo: "Need Devs to build simple chat app" },
  { groupName: "Vue JS testing", groupDomain: "Vue JS", groupInfo: "Testing an startup production app" },
  { groupName: "Valorant", groupDomain: "Gaming", groupInfo: "Playing Ranked Games" },
  { groupName: "PSG iTech Hackfest", groupDomain: "Problem Solving", groupInfo: "Participating in hackathon" },
  { groupName: "StartUp Plans", groupDomain: "Business", groupInfo: "Discussing StarUp plans" },
]

const FlipCard = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Card containerStyle={styles.mainWrapper}>
          {SampleData.map((u, i) => {
            return (
              <View key={i} style={styles.container}>
                <Card containerStyle={styles.wrapper}>
                  <View style={styles.head}>
                    <View style={styles.headalign}>
                      <Text style={styles.headText}>{u.groupName}</Text>
                      <Text style={{ paddingLeft: 3, position: 'absolute', color: 'grey', marginLeft: -2 }}>Domain: {u.groupDomain}</Text>
                    </View>
                  </View>
                  <Text style={{ marginBottom: 10, color: "#000", overflow: 'hidden' }}>
                    {u.groupInfo}
                  </Text>
                </Card>
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    color: '#000',
    backgroundColor: '#000',
    marginHorizontal: -20,
    marginTop: -40
  },
  headalign: {
    flexDirection: 'column-reverse',
  },
  wrapper: {
    borderRadius: 20,
    backgroundColor: "#fff",
    borderColor: "#fff"
  },
  mainWrapper:{
    backgroundColor: "#000",
    borderColor: '#000'
  },
  container: {
    // flex: 1,
    color: '#000',
    backgroundColor: '#000',
    marginHorizontal: -20,
  },
  headText: {
    justifyContent: 'flex-start',
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,

  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
  }
});

export default FlipCard;