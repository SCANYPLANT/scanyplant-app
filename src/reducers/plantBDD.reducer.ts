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

        case plantConstants.GET_BY_ID_PLANT_BDD_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.GET_BY_ID_PLANT_BDD_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.GET_BY_ID_PLANT_BDD_FAILURE:
            return {
                error: action.error,
            };


        case plantConstants.UPDATE_BY_ID_PLANT_BDD_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.UPDATE_BY_ID_PLANT_BDD_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.UPDATE_BY_ID_PLANT_BDD_FAILURE:
            return {
                error: action.error,
            };


        case plantConstants.DELETE_BY_ID_PLANT_BDD_REQUEST:
            return {
                loading: true,
            };
        case plantConstants.DELETE_BY_ID_PLANT_BDD_SUCCESS:
            return {
                data: action.data,
            };
        case plantConstants.DELETE_BY_ID_PLANT_BDD_FAILURE:
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

        default:
            return state;
    }
}
