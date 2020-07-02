import { plantConstants } from '../constants';

export function plant(state = {}, action) {
    switch (action.type) {
        case plantConstants.SEARCH_PLANT_BY_IMG_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.SEARCH_PLANT_BY_IMG_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.SEARCH_PLANT_BY_IMG_FAILURE:
            return {
                error: action.error,
            };
        case plantConstants.SEARCH_PLANT_BY_NAME_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.SEARCH_PLANT_BY_NAME_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.SEARCH_PLANT_BY_NAME_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
}
