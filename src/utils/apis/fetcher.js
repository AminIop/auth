import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const Api = {
    get: endPoint => instance.request({
        url: endPoint,
        method: 'GET'
    })
}