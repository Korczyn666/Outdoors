import axios, { AxiosResponse } from 'axios';
import { Trail } from '../models/trail';

const sleep =( delay: number ) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}



axios.defaults.baseURL = 'http://localhost:5000/api';


axios.interceptors.response.use( async response => {
    try {
        await sleep(1000);
        return response;
    } catch (err) {
        console.log(err);
        return await Promise.reject(err);
    }
})



const responseBody =  <T>(response : AxiosResponse<T>) => response.data;


const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Trails = {
    list: () => requests.get<Trail[]>('/outdoors'),
    details: (id: number) => requests.get<Trail>(`/outdoors/${id}`),
}

const agent = {
    Trails
}

export default agent;
