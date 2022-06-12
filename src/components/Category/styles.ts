import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 4,
    marginLeft: 4,
  },
  content: {
    width: 100,
    height: 116,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingVertical: 20,
  },
  title: {
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
    fontSize: 15,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: THEME.COLORS.SECONDARY_100,
    borderColor: THEME.COLORS.SECONDARY_50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 3,
  },
});
