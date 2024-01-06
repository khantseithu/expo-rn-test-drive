import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  header: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repositories</Text>
    </View>
  );
};

export default AppBar;
