import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { SECONDARY_40, SECONDARY_100, HEADING } = THEME.COLORS;
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <LinearGradient colors={[SECONDARY_100, SECONDARY_40]} style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={HEADING} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
