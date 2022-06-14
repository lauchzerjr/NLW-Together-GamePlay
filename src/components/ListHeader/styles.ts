import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 27,
  },
  title: {
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
    fontSize: 18,
  },
  subTitle: {
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HIGHLIGHT,
    fontSize: 13,
  },
});
