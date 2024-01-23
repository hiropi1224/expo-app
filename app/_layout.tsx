import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { TamaguiProvider } from "tamagui";
import appConfig from "../tamagui.config";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <TamaguiProvider config={appConfig} defaultTheme="dark">
        <Slot />
      </TamaguiProvider>
    </ThemeProvider>
  );
}
