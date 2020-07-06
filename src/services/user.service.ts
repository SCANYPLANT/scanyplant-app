import { toLower } from 'lodash';
import config from '../../config';
import { readStorage, setStorage } from '../utils/storage';
import handleResponseApi   from '../utils/handleResponse';

export const userService = {
    login,
    me,
    register,
    update,
    updatePassword,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ email: toLower(username), password }),
    };

    return fetch(`${config.API_URL}/api/auth/login`, requestOptions)
        .then(handleResponseApi)
        .then(user => {
            console.log(user)
            // setStorage('token', action.user?.meta?.token).then(r => r);
            return user;
        });
}

async function me() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token').then(r => r)}`,
        },
    };

    return fetch(`${config.API_URL}/api/users/me`, requestOptions)
        .then(handleResponseApi)
        .then(user => {
            return user;
        });
}

function register(email,firstName, lastName, password ) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            email: toLower(email),
            firstName,
            lastName,
            password,
        }),
    };

    return fetch(`${config.API_URL}/api/users`, requestOptions)
        .then(handleResponseApi)
        .then(user => {
            return user;
        });
}

async function update(id,firstName, lastName, email) {
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
        body: JSON.stringify({
            email: toLower(email),
            firstName: firstName,
            lastName: lastName,
        }),
    };

    return fetch(`${config.API_URL}/api/users/${id}`, requestOptions)
        .then(handleResponseApi)
        .then(user => {
            return user;
        });
}

async function updatePassword(password, confirmPassword) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${await readStorage('token')}`,
        },
        body: JSON.stringify({
            password,
            passwordConfirm: confirmPassword,
        }),
    };

    return fetch(`${config.API_URL}/api/users/resetPassword`, requestOptions)
        .then(handleResponseApi)
        .then(user => {
            return user;
        });
}
