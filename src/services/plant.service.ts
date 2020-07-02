import handleResponse from '../utils/handleResponse';
import config from '../../config';
import { readStorage } from '../utils/storage';
import { Platform } from 'react-native';
import FormData from 'form-data';

export const plantService = {
    searchByImg,
    searchByName,
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

    return fetch(`${config.API_URL}/api/plant/searchByImg`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function searchByName(name) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name }),
    };

    return fetch(`${config.API_URL}/api/plant/searchByName`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
