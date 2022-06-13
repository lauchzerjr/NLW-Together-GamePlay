import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: THEME.FONTS.TITLE_700,
    color: THEME.COLORS.HEADING,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: 68,
    borderColor: THEME.COLORS.SECONDARY_50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: THEME.COLORS.SECONDARY_40,
    borderColor: THEME.COLORS.SECONDARY_50,
    borderWidth: 1,
    borderRadius: 8,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: THEME.FONTS.TEXT_500,
    color: THEME.COLORS.HIGHLIGHT,
  },
  caracteresLimit: {
    fontSize: 13,
    fontFamily: THEME.FONTS.TEXT_400,
    color: THEME.COLORS.HIGHLIGHT,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});
