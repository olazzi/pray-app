import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { colors } from "../config/colors";
import MainCounter from "../components/mainCounter";
import VibrationIcon from "../assets/vibrationIcon";
import DarkModeIcon from "../assets/darkModeIcon";

const HomePage = () => {
  const { mode, updateTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(mode === "dark");
  const [isVibration, setIsVibration] = useState(false);
  const handleSwitch = () => {
    const theme = isActive ? "light" : "dark";
    updateTheme(theme);
    setIsActive((prev) => !prev);
  };
  const handleVibration = () => {
    setIsVibration((prev) => !prev);
  }
  const activeColors = colors[mode];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      borderRadius: 50,
      marginHorizontal: 10,
      padding: 20,
      backgroundColor: activeColors.plusBackground,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    iconSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
    }

  });
  return (
    <View style={[styles.container, { backgroundColor: activeColors.primaryBackground }]}>
      <View style={styles.iconSection}>
      <TouchableOpacity onPress={handleVibration} style={styles.button}>
        <VibrationIcon width={32} height={32} color={activeColors.vibrationColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSwitch} style={styles.button}>
        <DarkModeIcon width={32} height={32} color={activeColors.vibrationColor} />
      </TouchableOpacity>
      </View>
      <MainCounter isVibrate={isVibration}/>

    </View>
  );
};



export default HomePage;
