import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "../screens/FavoriteScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#351401",
        },
        drawerStyle: {
          backgroundColor: "#351401",
        },
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="DrawerCategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-list" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-star" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
