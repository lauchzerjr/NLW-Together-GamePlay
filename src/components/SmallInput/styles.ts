import { THEME } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: THEME.COLORS.SECONDARY_40,
    color: THEME.COLORS.HEADING,
    borderRadius: 8,
    fontFamily: THEME.FONTS.TEXT_400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: THEME.COLORS.SECONDARY_50
  },
});
