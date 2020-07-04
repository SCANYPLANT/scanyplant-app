import { userConstants } from '../constants';

export function resetPassword(state = {}, action) {
    switch (action.type) {
        case userConstants.UPDATE_PASSWORD_REQUEST:
            return {
                loading: true,
            };
        case userConstants.UPDATE_PASSWORD_SUCCESS:
            return {
                user: action.user,
            };
        case userConstants.UPDATE_PASSWORD_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
}
