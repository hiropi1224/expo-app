import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: "pop-to/home",
        }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: "/pop-to/details" }}>Go to Details</Link>
      <Link href={{ pathname: "/" }}>Go Back Home</Link>
    </View>
  );
}
