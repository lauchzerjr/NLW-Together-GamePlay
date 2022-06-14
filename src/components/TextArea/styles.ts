import { THEME } from "../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    backgroundColor: THEME.COLORS.SECONDARY_40,
    color: THEME.COLORS.HEADING,
    borderRadius: 8,
    fontFamily: THEME.FONTS.TEXT_400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: THEME.COLORS.SECONDARY_50,
    padding: 16,
    textAlignVertical: "top",
  },
});
