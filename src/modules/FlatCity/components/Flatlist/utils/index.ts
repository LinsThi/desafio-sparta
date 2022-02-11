import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

export function removeCitySelected(
  arrayCities: SelectedCityDTO[],
  item: SelectedCityDTO,
) {
  const indexCity = arrayCities.findIndex(
    currentCity => currentCity.lat === item.lat && currentCity.lon === item.lon,
  );

  arrayCities.splice(indexCity, 1);

  return arrayCities;
}
