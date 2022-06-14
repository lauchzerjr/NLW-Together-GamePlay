import { THEME } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
