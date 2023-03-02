import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteList from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

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
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
