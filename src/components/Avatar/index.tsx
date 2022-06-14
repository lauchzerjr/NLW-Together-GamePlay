import React from "react";
import { THEME } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { Image } from "react-native";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { SECONDARY_80, SECONDARY_100 } = THEME.COLORS;

  return (
    <LinearGradient
      style={styles.container}
      colors={[SECONDARY_80, SECONDARY_100]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
