import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerTitle: "pop-to/details" }} />
      <Text>Details</Text>
      <Link href="/pop-to/settings">Go to Settings</Link>
    </View>
  );
}
