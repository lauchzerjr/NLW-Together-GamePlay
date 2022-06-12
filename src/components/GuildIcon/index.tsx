import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import discordPng from '../../assets/banner.png'

export function GuildIcon() {

  return (
    <Image 
      style={styles.image}
      source={discordPng}
      resizeMode="cover"
    />
  );
}