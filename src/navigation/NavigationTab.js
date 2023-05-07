import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function NavigationTap() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "gray",
      // }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
