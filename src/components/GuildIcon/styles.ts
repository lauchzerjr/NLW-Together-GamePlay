import { StyleSheet } from "react-native";
import { THEME } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.DISCORD,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 62,
    height: 66,
  },
});
