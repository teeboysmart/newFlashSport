import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLoad = async(key, value) => {
     try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key,  jsonValue)
     } catch({message}) {
         alert(message)
     }
}

export const getLoad = async(key) => {
    try {
       const jsonValue = await AsyncStorage.getItem(key)
       return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch({message}) {
        alert(message)
    }
}