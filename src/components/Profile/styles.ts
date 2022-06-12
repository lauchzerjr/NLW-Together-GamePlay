import { StyleSheet } from "react-native";
import { THEME } from './../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: THEME.FONTS.TITLE_500,
    fontSize: 24,
    color: THEME.COLORS.HEADING,
    marginRight: 6,
  },
  userName: {
    fontFamily: THEME.FONTS.TITLE_700,
    fontSize: 24,
    color: THEME.COLORS.HEADING,
  },
  message: {
    fontFamily: THEME.FONTS.TEXT_400,
    fontSize: 13,
    color: THEME.COLORS.HIGHLIGHT,
  }
});
