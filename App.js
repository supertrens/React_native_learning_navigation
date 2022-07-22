import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ title: "Home", headerBackVisible: true }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            options={({ route }) => ({ title: route.params.title })}
          >
            {(props) => <MealsOverviewScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="MealDetailScreen"
            options={({ route }) => ({ title: route.params.title })}
          >
            {(props) => <MealDetailScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
