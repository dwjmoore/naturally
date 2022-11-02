import axios from 'axios';

export default axios.create({
    baseURL: 'https://naturally-api.herokuapp.com'
});