import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?',
    headers: {
        Autorization: 'Client-ID AIzaSyBuhqWidkiYlc9uVm8VRSPqOuhk8lMiPQk'
    }
});