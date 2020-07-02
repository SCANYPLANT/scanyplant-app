import handleResponse from '../utils/handleResponse';
import config from '../../config';

export const plantService = {
    searchByImg,
    searchByName,
};

function searchByImg(data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ image: data }),
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
