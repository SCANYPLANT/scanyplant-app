import { plantConstants, userConstants } from '../constants';
import { plantService } from '../services/plant.service';

export const plantActions = {
	searchPlantByImg,
	searchPlantByName,
	getPlantSearch,
	getAllPlantBDD,
	getByIdPlantBDD,
	postPlantBDD,
	updateByIdPlantBDD,
	deleteByIdPlantBDD,
	clean
};

function searchPlantByImg(data) {
	return dispatch => {
		dispatch(request({ data }));

		plantService.searchByImg(data).then(
			data => {
				dispatch(success(data));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_REQUEST, data };
	}

	function success(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_FAILURE, error };
	}
}

function searchPlantByName(data) {
	return dispatch => {
		dispatch(request({ data }));

		plantService.searchByName(data).then(
			data => {
				dispatch(success(data));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_REQUEST, data };
	}

	function success(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_FAILURE, error };
	}
}

function getPlantSearch(id) {
	return dispatch => {
		dispatch(request());

		plantService.getPlantSearch(id).then(
			id => {
				dispatch(success(id));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.GET_PLANT_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.GET_PLANT_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.GET_PLANT_FAILURE, error };
	}
}

function getByIdPlantBDD(id) {
	return dispatch => {
		dispatch(request());

		plantService.getByIdPlantBDD(id).then(
			id => {
				dispatch(success(id));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.GET_BY_ID_PLANT_BDD_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.GET_BY_ID_PLANT_BDD_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.GET_BY_ID_PLANT_BDD_FAILURE, error };
	}
}

function getAllPlantBDD() {
	return dispatch => {
		dispatch(request());

		plantService.getAllPlantBDD().then(
			plant => {
				dispatch(success(plant));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.GET_PLANT_BDD_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.GET_PLANT_BDD_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.GET_PLANT_BDD_FAILURE, error };
	}
}

function postPlantBDD(body) {
	return dispatch => {
		dispatch(request());

		plantService.postPlantBDD(body).then(
			plant => {
				dispatch(success(plant));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.POST_PLANT_BDD_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.POST_PLANT_BDD_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.POST_PLANT_BDD_FAILURE, error };
	}
}

function updateByIdPlantBDD(body) {
	return dispatch => {
		dispatch(request());

		plantService.updateByIdPlantBDD(body).then(
			plant => {
				dispatch(success(plant));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.UPDATE_BY_ID_PLANT_BDD_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.UPDATE_BY_ID_PLANT_BDD_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.UPDATE_BY_ID_PLANT_BDD_FAILURE, error };
	}
}

function deleteByIdPlantBDD(body) {
	return dispatch => {
		dispatch(request());

		plantService.deleteByIdPlantBDD(body).then(
			plant => {
				dispatch(success(plant));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request() {
		return { type: plantConstants.DELETE_BY_ID_PLANT_BDD_REQUEST };
	}

	function success(data) {
		return { type: plantConstants.DELETE_BY_ID_PLANT_BDD_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.DELETE_BY_ID_PLANT_BDD_FAILURE, error };
	}
}
function clean() {
	return { type: plantConstants.POST_PLANT_BDD_CLEAN };
}
