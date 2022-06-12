import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 30
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HEADING,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace()
  }
});
