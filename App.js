import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/stack";
import FavoritesContextProvider from "./store/context/favorites-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
