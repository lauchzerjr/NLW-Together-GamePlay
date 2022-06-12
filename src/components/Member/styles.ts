import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
  },
  nameStatus: {
    fontSize: 13,
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HIGHLIGHT,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  },
});
