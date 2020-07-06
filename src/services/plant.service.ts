import handleResponse from '../utils/handleResponse';
import config from '../../config';
import { readStorage } from '../utils/storage';
import { Platform } from 'react-native';
import FormData from 'form-data';

export const plantService = {
    searchByImg,
    searchByName,
    getPlantSearch,
    getAllPlantBDD,
    getByIdPlantBDD,
    postPlantBDD,
    updateByIdPlantBDD,
    deleteByIdPlantBDD,
};

const createFormData = (image, body= {}) => {
    const data = new FormData();
    data.append('image', {
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
        name: 'image'
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};
async function searchByImg(image) {

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
        body: createFormData(image),
    };

    return fetch(`${config.API_URL}/api/plant/searchByImg`, requestOptions as any)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

async function searchByName(name) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
        body: JSON.stringify({ name }),
    };

    return fetch(`${config.API_URL}/api/plant/searchByName`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
async function getPlantSearch(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
    };

    return fetch(`${config.API_URL}/api/plant/trefle/${id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

async function postPlantBDD(body) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
        body
    };

    return fetch(`${config.API_URL}/api/plant`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
async function getAllPlantBDD() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
    };

    return fetch(`${config.API_URL}/api/plant/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
async function getByIdPlantBDD(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
    };

    return fetch(`${config.API_URL}/api/plant/${id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
async function updateByIdPlantBDD(id) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
    };

    return fetch(`${config.API_URL}/api/plant/${id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
async function deleteByIdPlantBDD(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
    };

    return fetch(`${config.API_URL}/api/plant/${id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
