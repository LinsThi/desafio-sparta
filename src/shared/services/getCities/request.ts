import { COUNTRY, FORMAT_JSON } from '../../constants/request';
import { apiCity } from '../api';

interface QueryProps {
  city: string;
}

export default {
  async get(path: string, params: QueryProps) {
    const query = `${params.city}&format=${FORMAT_JSON}&country=${COUNTRY}`;

    const url = `${path}?city=${query}`;

    return apiCity.get(url);
  },
};
