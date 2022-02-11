import { UNITS_CELCIUS } from '../constants/request';

export function verifyUnits(units: string) {
  return units === UNITS_CELCIUS ? 'C' : 'F';
}
