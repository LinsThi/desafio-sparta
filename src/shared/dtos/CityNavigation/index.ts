export interface CityNavigationProps {
  lat: number;
  lon: number;
  nameCity: string;
}

export interface CitySelectedNavigationDTO {
  citySelected: CityNavigationProps;
}
