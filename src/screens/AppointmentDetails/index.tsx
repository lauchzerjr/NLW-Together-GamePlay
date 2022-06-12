import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import BannerPng from "../../assets/banner.png";

import { styles } from "./styles";
import { THEME } from "../../global/styles/theme";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      userName: "Junior",
      avatar_url: "https://github.com/lauchzerjr.png",
      status: "online",
    },
    {
      id: "2",
      userName: "Adalberto",
      avatar_url: "https://github.com/lauchzerjr.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity>
            <Fontisto name="share" size={24} color={THEME.COLORS.PRIMARY} />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
