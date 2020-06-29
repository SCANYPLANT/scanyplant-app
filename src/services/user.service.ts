import { REACT_APP_API_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import {toLower} from 'lodash'

export const userService = {
		login,
		logout,
		register,
};


function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify({email: toLower(username), password})
	};

	return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			AsyncStorage.setItem('user', JSON.stringify(user)).then(e => e).catch(e => e);
			return user;
		});
}

function register(firstName, lastName, email) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify({email: email, firstName: firstName, lastName: lastName})
	};

	return fetch(`${process.env.REACT_APP_API_URL}/auth/register`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}


async function logout() {
	 AsyncStorage.removeItem('user').then(e => e).catch(e => e);
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
