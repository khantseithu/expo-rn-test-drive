import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontStyle: "italic",
    color: "#6a6a6a",
  },
  language: {
    marginTop: 5,
    color: "#007aff",
  },
  stats: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  stat: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

const RepositoryItem = ({ repositoryItem }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: repositoryItem.ownerAvatarUrl }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.fullName}>
            Full name: {repositoryItem.fullName}
          </Text>
          <Text style={styles.description}>
            Description: {repositoryItem.description}
          </Text>
          <Text style={styles.language}>
            Language: {repositoryItem.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text>Stars: </Text>
          <Text>{repositoryItem.stargazersCount}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Fork: </Text>
          <Text>{repositoryItem.forksCount}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Reviews: </Text>
          <Text>{repositoryItem.reviewCount}</Text>
        </View>
        <View style={styles.stat}>
          <Text>Rating: </Text>
          <Text>{repositoryItem.ratingAverage}</Text>
        </View>
        {/* <View style={styles.stat}>
          <Text>Reviews: {repositoryItem.reviewCount}</Text>
          <Text>Rating: {repositoryItem.ratingAverage}</Text>
        </View> */}
      </View>
    </>
  );
};

export default RepositoryItem;
