import { Text, View, Button, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
