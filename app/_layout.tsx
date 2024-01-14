import { Stack } from "expo-router/stack";
import {
  ThemeProvider,
  DarkTheme,

} from "@react-navigation/native";

export default function Layout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack
        screenOptions={{
          title: "Header",
          headerTintColor: DarkTheme.colors.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </ThemeProvider>
  );
}
