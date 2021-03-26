import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Settings from './components/settings';
import Home from './components/home';
import ApiCall from './components/ApiCall';
import Snap from './components/snap';

    function HomeScreen() {
      return (
        <Home />
      );
    }

    function SettingsScreen() {
      return (
        <Settings />
      
      );
    }
    function SettingsLog() {
      return (
        <ApiCall/>
      );
    }
    function ProfileSetting(){
      return(
          <Snap />
      );
    }
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
             return (
              <Ionicons
              name={ focused ? 'md-home': 'md-home'}
              size={size}
              color={color}
                  />
                );
              } 
        else if (route.name === 'Settings') {
            return (
              <Ionicons  
              name={focused ? 'ios-cog' : 'ios-cog'}
              size={size}
              color={color}
                  />
                );
                }
        else if (route.name === 'Music') {
                 return (
                  <Ionicons
                  name={focused ? 'ios-musical-notes' : 'ios-musical-notes'}
                  size={size}
                  color={color}
                   />
                );
                }
        else if (route.name === 'Profile') {
                 return (
                  <Ionicons
                  name={focused ? 'md-person' : 'md-person'}
                  size={size}
                  color={color}
                    />
                  );
                }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Music" component={SettingsLog} />
          <Tab.Screen name="Profile" component={ProfileSetting} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
Navigation:{
 backgroundColor: '#f25287',
}
});
