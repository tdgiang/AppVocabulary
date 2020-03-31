import AsyncStorage from '@react-native-community/async-storage';

export default setAsyncStorage=async(arr)=>{
    try {
        await AsyncStorage.setItem('arrWords1',JSON.stringify(arr));
    } catch (error) {
        console.log(error);
        
    }
}