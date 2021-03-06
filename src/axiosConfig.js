import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_MIDDLEWARE_URL
});

instance.defaults.withCredentials = true;

export default instance;