import { Link } from "expo-router";
import { Text, View } from "react-native";
import signIn from "../../Auth/signIn";
import explore from "./explore";
import profile from "./profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl">Welcome to Restate App</Text>
    
    </View>
  );
}
