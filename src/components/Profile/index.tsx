import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert("Logout", "Deseja sair do GamePlay", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          signOut();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
