import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Sticker Smash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e06377",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#ffffff",
  },

  list: {
    fontSize: 24,
    color: "#333",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#ffae00",
    borderRadius: 5,
    marginTop: 20,
  },
});
