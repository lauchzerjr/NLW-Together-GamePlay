import React from "react";
import {
  TouchableOpacityProps,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = true,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { SECONDARY_40, SECONDARY_50, SECONDARY_70, SECONDARY_85 } =
    THEME.COLORS;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[SECONDARY_50, SECONDARY_70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? SECONDARY_85 : SECONDARY_50, SECONDARY_40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}
