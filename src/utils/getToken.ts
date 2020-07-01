import AsyncStorage from '@react-native-community/async-storage';

export default function getToken() {
	return AsyncStorage.getItem('token')
		.then(token => token)
		.catch(e => e);
}
