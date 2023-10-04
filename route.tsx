import React from "react";
import Main from "./Main";

import { Platform, SafeAreaView, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";


export default function Router() {
  //const { mode } = useContext(ThemeContext);
  // const activeColors = colors[mode];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
       // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <NavigationContainer>

            <Main />

      </NavigationContainer>
    </SafeAreaView>
  );
}
