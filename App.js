import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './components/settings';
import Home from './components/home';
import ApiCall from './components/ApiCall';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import {useTheme, Avatar} from 'react-native-paper';
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

    function HomeScreen({ navigation }) {
      return (
        <Home />
        
      );
    }

    function SettingsScreen({ navigation }) {
      return (
        <Settings />
      
      );
    }
    function SettingsLog({ navigation }) {
      return (
        <ApiCall/>
      );
    }
   
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
            inactiveTintColor: 'white',
            style:{
              backgroundColor: "#694fad"
            },

          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Music" component={SettingsLog} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0, 
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Ionicons.Button
                name="create-outline"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: '',
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  );
};



const styles = StyleSheet.create({
Navigation:{
 backgroundColor: '#f25287',
}
});
