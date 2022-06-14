import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  title: {
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
    fontSize: 18,
  },
  category: {
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HIGHLIGHT,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontFamily: THEME.FONTS.TEXT_500,
    color: THEME.COLORS.HEADING,
    fontSize: 13,
    marginLeft: 7,
  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  player: {
    fontFamily: THEME.FONTS.TEXT_500,
    color: THEME.COLORS.HEADING,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  },
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
