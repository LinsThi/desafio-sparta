import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';

import request from './request';

export async function getTemperature(
  path: string,
  lat: number,
  lon: number,
  units: string,
  lang: string,
): Promise<ResponseGeneratorDTO> {
  const response = await request.get(path, {
    lat,
    lon,
    units,
    lang,
  });

  return response;
}
