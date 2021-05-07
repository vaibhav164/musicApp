import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./components/settings";
import HomePage from "./components/HomePage";
import ApiCall from "./components/ApiCall";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import { useTheme, Avatar } from "react-native-paper";
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return <Settings />;
}
function SettingsLog() {
  return <ApiCall />;
}

export default function NavigationPage() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "md-home" : "md-home"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "ios-cog" : "ios-cog"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Music") {
            return (
              <Ionicons
                name={focused ? "ios-musical-notes" : "ios-musical-notes"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "md-person" : "md-person"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#694fad",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Music" component={SettingsLog} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Ionicons.Button
                name="create-outline"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "",
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  );
};

export const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={HomePage}
        options={{
          title: "",
          headerStyle: {
            height: 0,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  Navigation: {
    backgroundColor: "#f25287",
  },
});
