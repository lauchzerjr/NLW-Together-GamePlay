import React from "react";
import {
  TouchableOpacityProps,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { THEME } from "../../global/styles/theme";
import { GuildProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { PRIMARY, ON, SECONDARY_50, SECONDARY_70 } = THEME.COLORS;

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[SECONDARY_50, SECONDARY_70]} >
          <GuildIcon />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? PRIMARY : ON} />

              <Text style={[styles.player, { color: owner ? PRIMARY : ON }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
