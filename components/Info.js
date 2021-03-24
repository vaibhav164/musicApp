import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Info = ({ route, navigation }) => {
  console.warn(route.params);
  const { param } = route.params;

  return (
    <View style={{ marginTop: 200 }}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.titl}>{param.trackName}</Text>
      <Text style={styles.titl3}> {param.artistName} </Text>
      <Text style={styles.titl1}> {param.releaseDate}</Text>
      <Button
        title="Click to go Back"
        style={styles.inp}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 180,
    marginHorizontal: 90,
    marginVertical: 1,
    color: "black",
  },
  titl: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 80,
    marginHorizontal: 90,
    marginVertical: -150,
    color: "black",
  },
  titl1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 80,
    marginHorizontal: 90,
    marginVertical: -160,
    color: "black",
  },
  titl3: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 80,
    marginHorizontal: 90,
    marginVertical: 1,
    color: "black",
  },
  inp: {
    position: "absolute",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
export default Info;
