import { DarkTheme } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Blog" }} />
      <View style={styles.main}>
        {/* <Text style={styles.title}>Blog Page</Text> */}
        <Text className={`font-bold text-6xl ${DarkTheme.colors.text}`}>
          Blog Page
        </Text>
        <Text style={styles.subtitle}>This is the Blog page of your app.</Text>
        <Link href="/">Go Back Home</Link>
        <View style={styles.linkArea}>
          <Link href="/blog/demo">Blog demo</Link>
          <Link href="/blog/sample1">Blog sample1</Link>
          <Link href="/blog/sample2">Blog sample2</Link>
          <Link href="/blog/sample3">Blog sample3</Link>
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
