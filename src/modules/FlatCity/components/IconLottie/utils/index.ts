import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

export function updateArrayCitiesSelected(
  arrayCities: SelectedCityDTO[],
  cityIdentificator: string,
) {
  const newArrayCity = arrayCities;
  const indexCity = newArrayCity.findIndex(
    (currentCity: SelectedCityDTO) =>
      currentCity.display_name === cityIdentificator,
  );

  newArrayCity[indexCity].isFavorite = !newArrayCity[indexCity].isFavorite;

  return newArrayCity;
}
