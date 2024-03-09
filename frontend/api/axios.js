import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyectogerencia.onrender.com/api',
    withCredentials:true
})

export default instance