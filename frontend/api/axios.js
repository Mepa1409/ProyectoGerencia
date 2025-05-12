import axios from 'axios';

const instance = () => {
    let headers = {}

    let authToken = localStorage.getItem('token')

    if(authToken && authToken !== '') headers['Authorization'] = `Bearer ${authToken}`

    return axios.create({
        baseURL: 'https://proyectogerencia.onrender.com/api',
        headers
    })
}

export default instance;
