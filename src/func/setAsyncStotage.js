import AsyncStorage from '@react-native-community/async-storage';

export default setAsyncStorage=async(key,arr)=>{
    try {
        await AsyncStorage.setItem(key,JSON.stringify(arr));

        
        
    } catch (error) {
        console.log(error);
        
    }
}