import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { ConnectionProvider } from '../components/ConnectionContext'
import { NavigationContainer } from '@react-navigation/native'
import CheckInternetConn from '../components/CheckInternetConn';
import NetworkListener from '../components/NetworkListener';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <ConnectionProvider>
      <NavigationContainer>
        <NetworkListener>
          <StatusBar barStyle={'default'} />
          <Stack.Navigator initialRouteName="Note App">
            <Stack.Screen name="NoteApp" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="CheckInternetConn" component={CheckInternetConn} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NetworkListener>
      </NavigationContainer>
    </ConnectionProvider>
  )
}

export default StackNavigation