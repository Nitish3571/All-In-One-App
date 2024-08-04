import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Calculater from '../screens/calculater/Calculater';
import ToDoTask from '../screens/todotask/ToDoTask';
import AgeCalculate from '../screens/agecalculate/AgeCalculate';
import GussNoGame from '../screens/gussnogame/GussNoGame';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import NoteApp from '../screens/noteapp/NoteApp';
import { ConnectionProvider } from '../components/ConnectionContext';
import NetworkListener from '../components/NetworkListener';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Note App" component={NoteApp} 
        options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="onenote" size={24} color="black" />
                ),
        }}
        />
        <Tab.Screen name="AgeCalculater" component={AgeCalculate} 
        options={{
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="hand-holding-medical" size={24} color="black" />
                ),
        }}
        />
        <Tab.Screen name="Calculater" component={Calculater} 
        options={{
            tabBarIcon: ({ color }) => (
                <Entypo name="calculator" size={24} color="black" />
                ),
        }}
        />
        <Tab.Screen name="Game" component={GussNoGame} 
        options={{
            tabBarIcon: ({ color }) => (
                <Entypo name="game-controller" size={24} color="black" />
                ),
        }}
        />
        <Tab.Screen name="To Do" component={ToDoTask} 
        options={{
            title:'To Do List',
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="tasks" size={24} color="black" />
                ),
        }}
        />
        {/* <Tab.Screen name="dfj" component={SettingsScreen} 
        options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name="setting" size={24} color={color} />
                ),
        }}
        />
        <Tab.Screen name="Settin" component={SettingsScreen} 
        options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name="setting" size={24} color={color} />
                ),
        }}
        />
        <Tab.Screen name="Setti" component={SettingsScreen} 
        options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name="setting" size={24} color={color} />
                ),
        }}
        /> */}
      </Tab.Navigator>
    // </NetworkListener>
    // </NavigationContainer>
    // </ConnectionProvider>
  );
}