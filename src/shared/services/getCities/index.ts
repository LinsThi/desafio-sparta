import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';

import request from './request';

export async function getCities(city: string): Promise<ResponseGeneratorDTO> {
  const response = await request.get('/search', {
    city,
  });

  return response;
}
