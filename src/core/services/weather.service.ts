import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData = signal<WeatherResponse | null>(null);
  errorMessage = signal<string | null>(null);

  readonly weatherState = computed(() => ({
    data: this.weatherData(),
    error: this.errorMessage(),
  }));

  constructor(private http: HttpClient) {}

  fetchWeather(city: string): Promise<WeatherResponse | null> {
    return new Promise((resolve) => {
      this.http
        .get<WeatherResponse>(
          `${environment.apiBaseUrl}?q=${city}&appid=${environment.appId}&units=metric`
        )
        .pipe(
          catchError((error) => {
            this.errorMessage.set('Failed to fetch weather data');
            return of(null);
          })
        )
        .subscribe({
          next: (data) => {
            this.weatherData.set(data);
            resolve(data);
          },
        });
    });
  }

  clearWeatherData(): void {
    this.weatherData.set(null);
  }
}
