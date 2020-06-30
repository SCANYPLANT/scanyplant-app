import { userConstants } from '../constants';
import { userService } from '../services';
import AsyncStorage from '@react-native-community/async-storage';

export const userActions = {
	login,
	register,
	logout,
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		userService.login(username, password).then(
			async user => {
				await AsyncStorage.setItem('user', user.toString()).then(r => r);
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

function register({ email, firstName, lastName, password }) {
	return dispatch => {
		dispatch(request({ email }));

		userService.register(firstName, lastName, email, password).then(
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

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
