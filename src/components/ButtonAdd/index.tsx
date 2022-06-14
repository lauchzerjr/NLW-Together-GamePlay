import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { THEME } from "../../global/styles/theme";

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={THEME.COLORS.HEADING}
        size={24}
      />
    </TouchableOpacity>
  );
}
