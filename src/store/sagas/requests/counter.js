import axios from "axios";

export function getCounterRequestValue() {
    return axios.request({
        method: "GET",
        url: "https://my-json-server.typicode.com/yassineDevox/counter-server/counter"
    })
}