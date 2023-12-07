import axios from 'axios';

const UserApi = axios.create({
    //baseURL: process.env.REACT_APP_API_URL,
    baseURL : window.location.origin,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default UserApi;
