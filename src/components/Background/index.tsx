import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../global/styles/theme";

type Props = {
  children: React.ReactNode;
};

export function Background({ children }: Props) {
  const { SECONDARY_80, SECONDARY_100 } = THEME.COLORS;

  return (
    <LinearGradient
      style={styles.container}
      colors={[SECONDARY_80, SECONDARY_100]}
    >
      {children}
    </LinearGradient>
  );
}
