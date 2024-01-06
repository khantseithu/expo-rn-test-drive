import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,

    // marginTop: Constants.statusBarHeight,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Rate Repository Application</Text> */}
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
