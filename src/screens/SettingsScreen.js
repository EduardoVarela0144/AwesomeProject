import { Text, Button, View, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button title="Ir al Home" onPress={() => goToHome("Home")} />
    </SafeAreaView>
  );
}
