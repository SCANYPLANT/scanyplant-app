import AsyncStorage from '@react-native-community/async-storage';
import { toLower } from 'lodash';
import config from '../../config';

export const userService = {
	login,
	logout,
	me,
	register,
};

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({ email: toLower(username), password }),
	};
	return fetch(`${config.API_URL}/api/auth/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}

function me(token) {
	const requestOptions = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: `Bearer ${token}`,
		},
	};

	return fetch(`${config.API_URL}/api/users/me`, requestOptions)
		.then(handleResponse)
		.then(user => {
			return user;
		});
}

function register(firstName, lastName, email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			email: toLower(email),
			firstName: firstName,
			lastName: lastName,
			password,
		}),
	};

	return fetch(`${config.API_URL}/api/users`, requestOptions)
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

async function StorageUser(user) {
	AsyncStorage.setItem('user', user)
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
				// auto logout if 401 response returned from api
				logout().then(r => r);
			}
			// const error = (data && data.message) || response.statusText;
			console.log(data);
			return data;
		}
		return data;
	});
}
