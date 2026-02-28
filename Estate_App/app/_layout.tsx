import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "./globals.css";
import GlobalProvider from "@/lib/globalProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "RubikRegular": require("../assets/fonts/Rubik-Regular.ttf"),
    "RubikBold": require("../assets/fonts/Rubik-Bold.ttf"),
    "RubikMedium": require("../assets/fonts/Rubik-Medium.ttf"),
    "RubikSemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "RubikLight": require("../assets/fonts/Rubik-Light.ttf"),
    "RubikExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  )
}