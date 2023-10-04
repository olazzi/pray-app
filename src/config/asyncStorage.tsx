import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

export const storeData = async (key: string, value: "dark" | "light") => {
    try {
        await AsyncStorage.setItem(key,value)
    } catch (error: any) {

    }
}

export const storeTokens = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key,value)
    } catch (error: any) {
    }
}

export const getData = async (key:string) => {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value) {
            return value;
        }
        else{
            return null;
        }

    } catch (error: any) {
    }
}
export const saveCountToLocalStorage = async (countToSave:number, name:string) => {
    try {
        await AsyncStorage.setItem(name, countToSave.toString());
        Alert.alert(`Count saved as ${countToSave} with the name "${name}"`);
    } catch (error) {
        console.error('Error saving count to local storage:', error);
    }
};
export const getSavedCounts = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const pairs = await AsyncStorage.multiGet(keys);
        return pairs || [];
    } catch (error) {
        console.error('Error getting saved counts:', error);
        return [];
    }
};

