import { combineReducers } from 'redux';
import { users } from './user.reducer';
import { authentication } from './authentification.reducer';
import { plant } from './plant.reducer';
import { searchPlant } from './searchPlant.reducer';
import { resetPassword } from './resetPassword.reducer';
import { plantBDD } from './plantBDD.reducer';
import { plantPOST } from './plantPOST.reducer';

const rootReducer = combineReducers({
	users,
	authentication,
	plantBDD,
	plantPOST,
	plant,
	searchPlant,
	resetPassword,
});
export default rootReducer;
