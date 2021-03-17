import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './components/settings';
import Home from './components/home';
import Log from './components/log';
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
    < Log />
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Log') {
              iconName = focused ? 'book' : 'book';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingsScreen} />
        <Tab.Screen name="Log" component={SettingsLog} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

