import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{margin:10, fontSize: 20}}>Press Button</Text>
      <Button
        title="Press"
        color='#000'
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text>OR SCROLL RIGHT</Text>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function Settings() {
  
  return (
  
        <Drawer.Navigator
        style={StyleSheet.container}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Feed" component={Feed} />
                           
        </Drawer.Navigator>  
  
  );
}
const styles = StyleSheet.create({
  container:{
backgroundColor: '#000'
  }
})
