import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text style={styles.text}>Curso React Native</Text>
        <Saludar name="Hola Raul Varela" />
        <Saludar name="Hola Eduardo Varela" />
        <Button title="Alert example" onPress={() => Alert.alert("Alert!")} />
        <LoginForm />
        <StatusBar style="auto" />
      </View> */}
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00ABB3",
    fontWeight: "bold",
    fontSize: 30,
  },
});
