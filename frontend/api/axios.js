import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyectogerencia.onrender.com',
    withCredentials:true
})

export default instance