import axios from 'axios';

// export const API_URL = 'http://192.168.2.252:50001/api/v0/';
export const API_URL = 'http://127.0.0.1:8000/api/v0';

export default axios.create({ baseURL: API_URL });
