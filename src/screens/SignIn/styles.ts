import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 51,
  },
  title: {
    color: THEME.COLORS.HEADING,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: THEME.FONTS.TITLE_700,
    lineHeight: 40,
  },
  subTitle: {
    color: THEME.COLORS.HEADING,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
    fontFamily: THEME.FONTS.TITLE_500,
    lineHeight: 25,
  },
});
