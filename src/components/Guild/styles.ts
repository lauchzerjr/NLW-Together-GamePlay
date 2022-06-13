import { THEME } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
    fontSize: 18,
    marginBottom: 4,
  },
  type: {
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HIGHLIGHT,
    fontSize: 13,
  },
});
