import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyectogerencia.onrender.com/api',
   // baseURL: 'http://localhost:3001/api',
    withCredentials:true
})

export default instance