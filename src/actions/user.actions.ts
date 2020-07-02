import { userConstants } from '../constants';
import { userService } from '../services';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import getToken from '../utils/getToken';
import { removeStorage, setStorage } from '../utils/storage';

export const userActions = {
	login,
	register,
	update,
	me,
	logout,
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password).then(
			async user => {
				await setStorage('token', user.meta.token)
				dispatch(success(user));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(user) {
		return { type: userConstants.LOGIN_REQUEST, user };
	}

	function success(user) {
		return { type: userConstants.LOGIN_SUCCESS, user };
	}

	function failure(error) {
		return { type: userConstants.LOGIN_FAILURE, error };
	}
}

// check user info
function me() {
	return async dispatch => {
		dispatch(request());
		userService.me().then(
			async user => {
				dispatch(success(user));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: userConstants.ME_REQUEST };
	}

	function success(user) {
		return { type: userConstants.ME_SUCCESS, user };
	}

	function failure(error) {
		return { type: userConstants.ME_FAILURE, error };
	}
}

function register(email, firstName, lastName, password ) {
	return dispatch => {
		dispatch(request({ email }));

		userService.register(email, firstName, lastName,  password ).then(
			user => {
				dispatch(success(user));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(user) {
		return { type: userConstants.REGISTER_REQUEST, user };
	}

	function success(user) {
		return { type: userConstants.REGISTER_SUCCESS, user };
	}

	function failure(error) {
		return { type: userConstants.REGISTER_FAILURE, error };
	}
}

function update({ id,email, firstName, lastName }) {
	return dispatch => {
		dispatch(request({ email }));

		userService.update(id,firstName, lastName, email).then(
			user => {
				dispatch(success(user));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(user) {
		return { type: userConstants.UPDATE_REQUEST, user };
	}

	function success(user) {
		return { type: userConstants.UPDATE_SUCCESS, user };
	}

	function failure(error) {
		return { type: userConstants.UPDATE_FAILURE, error };
	}
}

function logout() {
	removeStorage('token').then(r => r)
	return { type: userConstants.LOGOUT };
}
