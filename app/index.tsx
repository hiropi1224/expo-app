import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";
import { DarkTheme } from "@react-navigation/native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/settings/">Settings</Link>
        <Link href="/settings/" asChild>
          <Pressable
            onPress={() => {
              router.push("/settings/");
            }}
          >
            <Text>push Settings</Text>
          </Pressable>
        </Link>
        <Link href="/settings/" asChild>
          <Pressable
            onPress={() => {
              router.replace("/settings/");
            }}
          >
            <Text>replace Settings</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: DarkTheme.colors.text,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
