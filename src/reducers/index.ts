import { combineReducers } from 'redux';
import { users } from './user.reducer';
import { authentication } from './authentification.reducer';
import { plant } from './plant.reducer';
import { searchPlant } from './searchPlant.reducer';
import { resetPassword } from './resetPassword.reducer';

const rootReducer = combineReducers({
	users,
	authentication,
	plant,
	searchPlant,
	resetPassword,
});
export default rootReducer;
