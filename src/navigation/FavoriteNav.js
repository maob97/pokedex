import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteList from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteList}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
