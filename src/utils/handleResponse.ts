import { removeStorage } from './storage';

export default function handleResponseAPi(response: {
    text: () => Promise<any>;
    ok: any;
    status: number;
    statusText: any;
}) {
    return response.text().then(async text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                await removeStorage('token')
            }
            // const error = (data && data.message) || response.statusText;
            return data;
        }
        return data;
    });
}
