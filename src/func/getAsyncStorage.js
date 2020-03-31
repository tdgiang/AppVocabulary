import AsyncStorage from '@react-native-community/async-storage';

export default  getAsyncStorage=async(key)=>{
        try {
            const arrWord=await AsyncStorage.getItem(key);
            if(arrWord!=null)
            {  
                return JSON.parse(arrWord);
            }
            return [];
            
        } catch (error) {
            console.log(error);
            return [];
            
        }

}

 
