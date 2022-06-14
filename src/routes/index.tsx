import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { THEME } from "../global/styles/theme";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

const navTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.SECONDARY_100,
  },
};

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer theme={navTheme}>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
