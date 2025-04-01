export interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list?: WeatherItem[];
  city?: City;
}

export interface WeatherItem {
  dt: number;
  main: MainWeather;
  weather: WeatherDetails[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherCard {
  title: string;
  icon: string;
  description: string;
  footer: string;
}
