import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e4bad4' }}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login."
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
            />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
            />
        </View>
        <Button title="Login"/>
    </View>
  ); z
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f48b29' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsLog() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cdc733' }}>
      <Text>Log!</Text>
    </View>
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Log" component={SettingsLog} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inputView: {
    // backgroundColor: "powderblue",
    borderWidth: 1,
    borderColor:"powderblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    alignItems: "flex-start",
  }
});