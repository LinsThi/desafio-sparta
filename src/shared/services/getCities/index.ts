import request from '../request';

export async function getCities(city: string) {
  try {
    const response = await request.get('/search', { city });

    return response;
  } catch {
    return null;
  }
}
