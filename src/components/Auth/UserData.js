import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();

  return (
    <View>
      <Text>UserData...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
