import { plantConstants } from '../constants';

export function plant(state = {}, action) {
    switch (action.type) {
        case plantConstants.GET_PLANT_BDD_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.GET_PLANT_BDD_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.GET_PLANT_BDD_FAILURE:
            return {
                error: action.error,
            };
        case plantConstants.POST_PLANT_BDD_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.POST_PLANT_BDD_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.POST_PLANT_BDD_FAILURE:
            return {
                error: action.error,
            };
        case plantConstants.GET_PLANT_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.GET_PLANT_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.GET_PLANT_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
}
