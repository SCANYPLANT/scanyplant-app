import { plantConstants } from '../constants';

export function searchPlant(state = {}, action) {
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
        case plantConstants.GET_PLANT_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.GET_PLANT_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.GET_PLANT_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
}
