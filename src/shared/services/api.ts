import axios from 'axios';

import { BASE_URL } from '../constants/request';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
