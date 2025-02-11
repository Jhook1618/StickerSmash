import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        name="not-found"
        options={{ headerTitle: "Oops! Not Found" }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>This screen doesn't exist. </Text>
        <Link href={"/"} style={styles.list}>
          Go to Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
  },
  list: {
    fontSize: 24,
    color: "#333",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#d7263d",
    borderRadius: 5,
    marginTop: 20,
  },
});
