import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My About Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeac99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
});