import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mynotesapp2018.herokuapp.com/api',
    timeout: 2000
});

export default instance