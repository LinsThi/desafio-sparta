export interface MainProps {
  temp_min: number;
  temp: number;
  temp_max: number;
}

export interface WeatherProps {
  description: string;
  icon: string;
}

export interface TemperatureCity {
  dt: number;
  main: MainProps;
  weather: WeatherProps[];
}
