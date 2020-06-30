
import AsyncStorage from '@react-native-community/async-storage';

export default async function getToken () {
    const token = async () => {
        await AsyncStorage.getItem('token')
        
    }
}