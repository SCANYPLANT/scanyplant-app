import { combineReducers } from 'redux';
import { users } from './user.reducer';
import { authentication } from './authentification.reducer';
import { plant } from './plant.reducer';

const rootReducer = combineReducers({
	users,
	authentication,
	plant,
});
export default rootReducer;
