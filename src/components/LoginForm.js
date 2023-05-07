import { View, TextInput, Button, StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EAEAEA",
    color: "#3C4048",
    borderRadius: 50,
    width: 250,
    height: 40,
    marginBottom: 10,
    textAlign: "center",
  },
});
