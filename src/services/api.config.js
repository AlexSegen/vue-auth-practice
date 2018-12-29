import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://mynotesapp2018.herokuapp.com/api',
    timeout: 5000
});

export default instance