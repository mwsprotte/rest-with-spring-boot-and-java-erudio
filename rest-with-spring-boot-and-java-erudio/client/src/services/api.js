import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'http://localhost:3000',

});

export default api;