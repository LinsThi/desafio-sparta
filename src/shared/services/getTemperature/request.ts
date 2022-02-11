import { API_KEY_WEATHER } from '~/shared/constants/request';

import { apiWeather } from '../api';

interface QueryProps {
  lat: number;
  lon: number;
  units: string;
  lang: string;
}

export default {
  async get(path: string, params: QueryProps) {
    const paramsUrl = `lat=${params.lat}&lon=${params.lon}&units=${params.units}&lang=${params.lang}`;

    const url = `/${path}?&${paramsUrl}&appid=${API_KEY_WEATHER}`;

    console.log(url);

    return apiWeather.get(url);
  },
};
