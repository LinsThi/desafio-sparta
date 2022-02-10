export interface TempProps {
  day: number;
  min: number;
  max: number;
}

export interface WeatherProps {
  description: string;
  icon: string;
}

export interface WeatherForecast {
  dt: number;
  temp: TempProps;
  weather: WeatherProps[];
}
