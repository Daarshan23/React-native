import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import signIn from "../../Auth/signIn";
import explore from "./explore";
import profile from "./profile";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning </Text>
              <Text className="text-base font-rubik-medium text-black-300">Darshan</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <Search />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-bold text-primary-300">Sell All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FeaturedCard/>
      <Card/>
    </SafeAreaView>
  );
}
