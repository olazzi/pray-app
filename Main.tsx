import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {

  StyleSheet,
  useColorScheme,
  View
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./src/pages/HomePage";

import HomeIcon from "./src/assets/homeIcon";
import SettingIcon from "./src/assets/settingIcon";
import SavedCountsPage from "./src/pages/SavedCountsPage";

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomePage"
      component={HomePage}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="SettingsPage"
      component={SavedCountsPage}
      options={{
        headerShown: false,
      }}
    />
  </SettingsStack.Navigator>
);

function App(): JSX.Element {
  //const { mode } = useContext(ThemeContext);
  // const activeColors = colors[mode];

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          backgroundColor: "#F5F6FA",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingIcon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff"
  },
});

export default App;
