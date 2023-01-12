import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Mi Cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
