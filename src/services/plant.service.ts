import AsyncStorage from '@react-native-community/async-storage';

export const plantService = {
	searchByImg,
	searchByName,
};

function searchByImg(data) {
	const requestOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({ image: data }),
	};

	return fetch(`http://localhost:3000/api/plant/searchByImg`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}

function searchByName(name) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({ name }),
	};

	return fetch(`http://localhost:3000/api/plant/searchByName`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}

async function logout() {
	AsyncStorage.removeItem('user')
		.then(e => e)
		.catch(e => e);
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
				logout().then(r => r);
			}
			return data;
		}
		return data;
	});
}
