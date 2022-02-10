import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

export function VerifyIfAdding(
  citiesSelected: SelectedCityDTO[],
  lat: number,
  lon: number,
) {
  const resultFind = citiesSelected.find(
    currentCity => currentCity.lat === lat && currentCity.lon === lon,
  );

  return resultFind !== undefined;
}
