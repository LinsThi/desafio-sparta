import axios from 'axios';

import { BASE_URL, BASE_URL_WEATHER } from '../constants/request';

const apiCity = axios.create({
  baseURL: BASE_URL,
});

const apiWeather = axios.create({
  baseURL: BASE_URL_WEATHER,
});

export { apiCity, apiWeather };
