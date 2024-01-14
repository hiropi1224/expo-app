import { Button, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { StackActions } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation();

  const handlePopToTop = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button title="Go to first screen" onPress={handlePopToTop} />
    </View>
  );
}
