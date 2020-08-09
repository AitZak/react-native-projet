import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { Icon } from 'react-native-elements'

import HomeScreen from './src/screens/HomeScreen.js'
import ScanScreen from './src/screens/ScanScreen.js'
import ProductScreen from './src/screens/ProductScreen.js'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen
                  name="Home"
                  component={HomeStack}
                  options={{
                      tabBarLabels: 'Bienvenue !',
                      tabBarIcon: () => <Icon name="home" type="font-awesome" size={32} />
                  }}
              />
              <Tab.Screen
                  name="Scan"
                  component={ScanScreen}
                  options={{
                      tabBarLabels: 'Scan',
                      tabBarIcon: () => <Icon name="barcode-scan" type="material-community" size={32} />
                  }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  );
}
