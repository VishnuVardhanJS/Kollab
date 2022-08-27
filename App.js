import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Screens/Login'
import Select from './src/Screens/Select';
import CreateGroup from './src/Screens/CreateGroup';
import Home from './src/Screens/Home';
import About from './src/Screens/About';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Login" 
          options={{animationEnabled: false, header: () => null}}
          component={Login}
          />
        <Stack.Screen 
          name="select"
          options={{animationEnabled: false, header: () => null}}
          component={Select}
        />
        <Stack.Screen 
          name="join"
          options={{animationEnabled: false, header: () => null}}
          component={Home}
        />
        <Stack.Screen 
          name="create"
          options={{animationEnabled: false, header: () => null}}
          component={CreateGroup}
        />
        <Stack.Screen 
          name="about"
          options={{animationEnabled: false, header: () => null}}
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App