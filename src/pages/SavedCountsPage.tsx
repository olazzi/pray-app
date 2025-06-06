import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { getSavedCounts } from "../config/asyncStorage";
import { colors } from "../config/colors";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";

type SavedCount = [string, string];

const SavedCountsPage = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const isFocused = useIsFocused();
  const { mode } = useContext(ThemeContext);
  const activeColors = colors[mode];
  const [savedCounts, setSavedCounts] = useState<SavedCount[]>([]);
  const clearAll = () => {
    Alert.alert(
      "Delete All Saved Counts",
      "Are you sure you want to delete all saved counts?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              const filteredCounts = savedCounts.filter(item => item[0] === "theme");
              setSavedCounts(filteredCounts);
              await AsyncStorage.clear();
              setSavedCounts([]);
              navigation.navigate("HomePage");
            } catch (error) {
              console.error("Error clearing saved counts:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    const fetchSavedCounts = async () => {
      try {
        const counts = await getSavedCounts();
        const savedCountsData = counts.map((pair) => [pair[0], pair[1]]) as SavedCount[];
        setSavedCounts(savedCountsData);
      } catch (error) {
        console.error('Error fetching saved counts:', error);
      }
    };

    fetchSavedCounts();
  }, [isFocused]);
 const handleItemPress = (item:any) => {
   Alert.alert(
      "Continue",
      `Are you sure you want to Continue the saved count "${item[0]}"?`,
     [
       {
         text: "Cancel",
         style: "cancel",
       },
       {
         text: "OK",
         onPress: async () => {
           navigation.navigate("HomePage", { count: item[1] });
         },
       },
     ],
   )

  }

  return (
    <View style={[styles.container, { backgroundColor: activeColors.SavedCountsBackground }]}>

      <Text style={[styles.title, { color: activeColors.text }]}>Saved Counts</Text>
      <TouchableOpacity style={[styles.clearButton,{backgroundColor: activeColors.clearButton}]} onPress={clearAll}>
        <Text style={{ color: activeColors.text }}>Clear All</Text>
      </TouchableOpacity>
      {savedCounts.length > 0 ? (

        <FlatList
          data={savedCounts.filter(item => item[0] !== "theme")}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.listItem, { borderColor: activeColors.border }]}
              onPress={() => {
                handleItemPress(item);
              }}
            >
              <Text style={[styles.listItemText, { color: activeColors.text }]}>{item[0]}</Text>
              <Text style={[styles.listItemText2, { color: activeColors.text }, { backgroundColor: activeColors.itemBackground }]}>{item[1]}</Text>
            </TouchableOpacity>
          )}
        />

      ) : (
        <Text style={{ color: activeColors.text }}>No saved counts found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemText2: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 90,
    padding: 10,
  },
  clearButton: {
    borderRadius: 90,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  }
});

export default SavedCountsPage;
