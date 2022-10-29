import React, { useState, useEffect, componentDidMount } from 'react';
import { View, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';

const FlipCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscriber = firestore().collection('kollabs').orderBy("date", "desc").onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(documentSnapshot => {
            return {
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
            };
        });
        // console.log(data);
        setData(data);
    });
    return () => subscriber();
}, []);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Card containerStyle={styles.mainWrapper}>
          {data.map((u, i) => {
            return (
              <View key={i} style={styles.container}>
                <Card containerStyle={styles.wrapper}>
                  <View style={styles.head}>
                    <View style={styles.headalign}>
                      <Text style={styles.headText}>{u.groupName}</Text>
                      <Text style={{ paddingLeft: 3, position: 'absolute', color: 'grey', marginLeft: -2, marginRight:-5 }}>Domain: {u.domain}</Text>
                      <Text style={{ paddingLeft: 3, color: 'grey', marginLeft: -2, marginRight:-5 }}>{u.date}</Text>

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
    width: 350,
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