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
        case userConstants.UPDATE_REQUEST:
            return {
                loading: true,
            };
        case userConstants.UPDATE_SUCCESS:
            return {
                user: action.user,
            };
        case userConstants.UPDATE_FAILURE:
            return {
                error: action.error,
            };
        case userConstants.REGISTER_REQUEST:
            return {
                loggingIn: true,
                user: action.user,
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                loggedIn: true,
                user: action.user,
            };
        case userConstants.USERS_CLEAN:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}
