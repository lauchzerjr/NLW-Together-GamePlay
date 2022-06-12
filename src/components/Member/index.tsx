import React from "react";
import { Text, View } from "react-native";
import { THEME } from "../../global/styles/theme";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export type MemberProps = {
  id: string;
  userName: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const { ON, PRIMARY } = THEME.COLORS;
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.userName}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? ON : PRIMARY,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
