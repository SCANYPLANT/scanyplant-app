import { userConstants } from '../constants';

export function users(state = {}, action) {
	switch (action.type) {
		case userConstants.GET_ALL_REQUEST:
			return {
				loading: true,
			};
		case userConstants.GET_ALL_SUCCESS:
			return {
				items: action.users,
			};
		case userConstants.GET_ALL_FAILURE:
			return {
				error: action.error,
			};
		case userConstants.ME_REQUEST:
			return {
				loading: true,
			};
		case userConstants.ME_SUCCESS:
			return {
				user: action.user,
			};
		case userConstants.ME_FAILURE:
			return {
				error: action.error,
			};
		default:
			return state;
	}
}
