import request from './request';

export async function getTemperature(
  path: string,
  lat: number,
  lon: number,
  units: string,
  lang: string,
) {
  try {
    const response = await request.get(path, {
      lat,
      lon,
      units,
      lang,
    });

    return response;
  } catch {
    return null;
  }
}
