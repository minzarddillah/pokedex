import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
axios.defaults.timeout = 35000; // 30 seconds

export default axios;
