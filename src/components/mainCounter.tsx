import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  PermissionsAndroid,
  TextInput,
  Alert, Modal
} from "react-native";
import PlusIcon from "../assets/plusIcon";
import ResetIcon from "../assets/resetIcon";
import { ThemeContext } from "../contexts/ThemeContext";
import { colors } from "../config/colors";
import { saveCountToLocalStorage } from "../config/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const MainCounter = ({ isVibrate }: { isVibrate: boolean }) => {
  const [count, setCount] = useState(0);
  const { mode } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const activeColors = colors[mode];
  const navigation = useNavigation<StackNavigationProp<any>>();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const saveCount = () => {
    if (name && count >= 0) {
      saveCountToLocalStorage(count, name);
      setName('');
      setCount(0);
      toggleModal();
      navigation.navigate("SettingsPage");
    } else {
      Alert.alert("Please enter a valid name and count.");
    }
  };



  const incrementCount = () => {
    if (isVibrate) {
      Vibration.vibrate(100);
    }
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      if (isVibrate) {
        Vibration.vibrate(100);
      }
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 36,
      marginBottom: 20,
      fontWeight: "bold",
      color: activeColors.secondary,
      borderBottomWidth: 1,
      borderBottomColor: activeColors.secondary,
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      borderRadius: 90,
      marginHorizontal: 10,
      padding: 20,
    },
    resetButton: {
      padding: 20,
      borderRadius: 50,
      marginHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: activeColors.plusBackground,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: "bold",
      color: activeColors.resetColor,
    },
    smallContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    textContainer: {
      backgroundColor: activeColors.counterBackground,
      marginBottom: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    countText: {
      fontSize: 36,
      fontWeight: "bold",
      color: activeColors.secondary,
    },
    saveContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: 20,
      justifyContent: "flex-end",

    },

    nameInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: activeColors.primary,
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      backgroundColor: activeColors.primary,
      color: activeColors.primary,
    },

    saveButton: {
      padding: 10,
      backgroundColor: activeColors.plusBackground,
      borderRadius: 5,
      marginLeft: 10,
    },

    saveButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: activeColors.resetColor,
    },
    modalContainer: {
      backgroundColor: activeColors.modalBackground,
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: "95%",
      alignSelf: "center",

    },
    modalText: {
      color: activeColors.modalText,
      fontSize: 18,
      marginBottom: 10,
    },
    modalTitle: {
      color: activeColors.modalText,
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    modalInput: {
      borderWidth: 1,
      borderColor: activeColors.border,
      borderRadius: 5,
      padding: 10,
      width: "100%",
      marginBottom: 10,
      fontSize: 16,
    },
    modalButton: {
      backgroundColor: activeColors.plusBackground,
      borderRadius: 5,
      padding: 10,
      width: "100%",
      alignItems: "center",
      marginTop: 10,
    },
    modalButtonText: {
      color: activeColors.resetColor,
      fontSize: 16,
      fontWeight: "bold",
    },
    modalBody: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",

    }
  });

  return (
    <View style={[styles.container, { backgroundColor: activeColors.primaryBackground }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tasbeeh Counter</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: activeColors.plusBackground }]} onPress={incrementCount}>
          <PlusIcon width={238} height={238} color={activeColors.plusColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.smallContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: activeColors.plusBackground }]} onPress={decrementCount}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={resetCount}>
          <ResetIcon color={activeColors.resetColor} width={50} height={50} />
        </TouchableOpacity>
      </View>
      <View style={styles.saveContainer}>
      <TouchableOpacity style={styles.saveButton} onPress={toggleModal}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} transparent={true} >
        <View style={styles.modalBody}>
          <View style={styles.modalContainer} >
          <Text style={styles.modalTitle}>Enter a Name</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.modalButton} onPress={saveCount}>
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainCounter;
