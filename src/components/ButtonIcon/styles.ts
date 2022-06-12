import { THEME } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: "center",
    flexDirection: 'row',
    borderRadius: 8
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: THEME.COLORS.LINE
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: THEME.COLORS.HEADING
  }
});
