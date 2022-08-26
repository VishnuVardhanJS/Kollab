import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];

const FlipCard = () => {
  return (
      <View style={styles.container}>
        <Card>
          <View style={styles.head}>
            <Card.Image
              style={{ resizeMode: 'cover', borderRadius: 50 ,height:60, width:60 }}
              source={{ uri: "https://picsum.photos/id/237/200/300" }}
            />

            <Text style={styles.headText}>TEST HEAD</Text>
          </View>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structue than actual design.
          </Text>
          <Button title="VIEW NOW" />
        </Card>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292c40'
  },
  headText: {
    justifyContent: 'flex-start',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
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
    paddingBottom: 10

  }
});

export default FlipCard;