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
        <View style={styles.linkArea}>
          <Link href="/blog/">Blog</Link>
          <Link href="/blog/" asChild>
            <Pressable
              onPress={() => {
                router.push("/blog/");
              }}
            >
              <Text>push Blog</Text>
            </Pressable>
          </Link>
          <Link href="/blog/" asChild>
            <Pressable
              onPress={() => {
                router.replace("/blog/");
              }}
            >
              <Text>replace Blog</Text>
            </Pressable>
          </Link>
          <Link href="/pop-to/">PopToTopアクションデモ</Link>
          <Link href="/stack/home">Stackレイアウトデモ</Link>
          <Link href="/settings/">Unmatched Routeデモ</Link>
        </View>
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
  linkArea: {
    marginTop: 8,
    justifyContent: "flex-start",
    gap: 8,
  },
});
