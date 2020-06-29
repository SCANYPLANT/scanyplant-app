import { AsyncStorage } from 'react-native';
import { REACT_APP_API_URL } from 'react-native-dotenv';

export const scanyPlantService = {
	getAll,
};

function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	};

	return fetch(REACT_APP_API_URL as string, requestOptions)
		.then(handleResponse)
		.then(async result => result.records);
}

async function logout() {
	await AsyncStorage.removeItem('user');
}

function handleResponse(response: {
	text: () => Promise<any>;
	ok: any;
	status: number;
	statusText: any;
}) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout().then(r => r);
				window.location.reload();
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
