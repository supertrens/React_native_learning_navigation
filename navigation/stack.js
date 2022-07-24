import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./drawer";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#351401",
        },
      }}
    >
      <Stack.Screen
        name="CategoriesScreen"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealsOverviewScreen"
        options={({ route }) => ({ title: route.params.title })}
      >
        {(props) => <MealsOverviewScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
