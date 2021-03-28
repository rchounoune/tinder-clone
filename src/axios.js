import axios from 'axios';
const instance = axios.create({
    baseURL: "https://tinderapp-clone-backend.herokuapp.com",
});

export default instance;