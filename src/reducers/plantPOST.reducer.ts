import { plantConstants } from '../constants';

export function plantPOST(state = {}, action) {
    switch (action.type) {

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
        case plantConstants.POST_PLANT_BDD_CLEAN:
            return {};
        default:
            return state;
    }
}
