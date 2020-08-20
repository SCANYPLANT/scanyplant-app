import AsyncStorage from '@react-native-community/async-storage';

const setStorage = async (key, json) => {
	try {
		await AsyncStorage.setItem(key, json);
	} catch (e) {
		console.log(`setStorage() error: ${e.message}`);
	}
};

const readStorage = async key => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value) {
			return value;
		}
	} catch (e) {
		console.log(`readStorage() error: ${e.message}`);
	}
};

const removeStorage = async key => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		console.log(`removeStorage() error: ${e.message}`);
	}
};

export { setStorage, readStorage, removeStorage };
