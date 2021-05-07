import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../NavigationPage";
import ProfileScreen from "./Profile";
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ margin: 10, fontSize: 20 }}>Press Button</Text>
      <Button
        title="Pressed"
        color="#000"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text>OR SCROLL RIGHT</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Settings() {
  return (
    <Drawer.Navigator style={StyleSheet.container}>
      <Drawer.Screen name="Setting" component={Feed} />
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Music" component={Feed} />
      <Drawer.Screen name="Profile" component={Feed} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
