import axios from 'axios';
const instance = axios.create({ baseURL: 'http://cipsmn-api.herokuapp.com/public' });

export default instance