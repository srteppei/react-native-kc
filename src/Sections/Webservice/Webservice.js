import * as Constant from './Constants';
import api from 'marvel-comics-api';

export function search(endpoint, queryOptions) {
    return new Promise((resolve, reject) => {
        api(endpoint, {
            publicKey: Constant.PUBLICK_KEY,
            privateKey: Constant.PRIVATE_KEY,
            timeout: 4000,
            query: queryOptions
        }, function (err, body) {
            if (err) reject(err)
            console.log(body.data);
            resolve(body.data);
        })
    })
}

export const endpoint = {
    characters: 'characters'
}