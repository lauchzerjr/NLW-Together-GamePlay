import React from "react";
import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../global/styles/theme";

import { styles } from "./styles";

export function Load() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
