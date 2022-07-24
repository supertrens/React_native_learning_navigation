import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/stack";
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
}
