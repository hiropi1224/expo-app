import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "../global.css";
// import "../tamagui.css";

import { Slot } from "expo-router";

import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     // can hide splash screen here
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    // <TamaguiProvider config={config} defaultTheme={colorScheme}>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Slot />
    </ThemeProvider>
    // </TamaguiProvider>
  );
}
