import React from "react";
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import ProductName from "./ProductName";
function setEmail(x) {
  const Mail = x;
}
function setPassword(y) {
  const Code = y;
}

function Navigation({ navigation }) {
  const image = {
    uri:
      "https://i.pinimg.com/736x/dd/b3/c7/ddb3c721f6df2017b4bce462d756e652.jpg",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.loginBox}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Login."
              placeholderTextColor="#666"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Button
              title="Login"
              color="#000"
              onPress={() => navigation.navigate("ProductNameScreen")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default function HomePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="New"
        options={{
          title: "",
          headerStyle: {
            height: 0,
          },
        }}
        component={Navigation}
      />
      <Stack.Screen
        name="ProductNameScreen"
        options={{ title: "", headerShown: false, tabBarVisible: true }}
        component={ProductName}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
    marginTop: 10,
    padding: 10,
    fontSize: 20,
    alignItems: "flex-start",
  },
  TextInput: {
    fontSize: 20,
  },
  loginBox: {
    marginTop: 30,
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
