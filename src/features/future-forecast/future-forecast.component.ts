import { Component, computed } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { WeatherItem } from '../../core/models/weather.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-future-forecast',
  templateUrl: './future-forecast.component.html',
  styleUrls: ['./future-forecast.component.scss'],
  standalone: false,
})
export class FutureForecastComponent {
  protected fiveDayForecast = computed(() => {
    const forecasts = this.weatherService.weatherData()?.list;
    if (!forecasts || forecasts.length === 0) return [];

    const today = this.getStartOfDay(new Date());

    // five days forecast setup
    const forecastDays = Array.from(
      new Set(
        forecasts.map((f) => {
          const date = new Date(f.dt * 1000);
          return this.getStartOfDay(date).getTime();
        })
      )
    )
      .sort()
      .slice(0, 5); // take first 5 days (today and next 4)

    return forecastDays.map((dayTime) => {
      const dayDate = new Date(dayTime);
      const dayForecasts = forecasts.filter((f) => {
        const forecastDate = new Date(f.dt * 1000);
        return this.getStartOfDay(forecastDate).getTime() === dayTime;
      });

      // format day label
      const dayLabel =
        dayTime === today.getTime()
          ? 'Today'
          : this.datePipe.transform(dayDate, 'MMM d') || '';

      return {
        day: dayLabel,
        icon: this.getDominantIcon(dayForecasts.map((f) => f.weather[0].icon)),
        minTemp: Math.min(...dayForecasts.map((f) => f.main.temp)),
        maxTemp: Math.max(...dayForecasts.map((f) => f.main.temp)),
        description: dayForecasts[0]?.weather[0]?.description || '',
      };
    });
  });

  constructor(
    public weatherService: WeatherService,
    private datePipe: DatePipe
  ) {}

  private getStartOfDay(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  private getDominantIcon(icons: string[]): string {
    const counts: Record<string, number> = {};
    icons.forEach((icon) => (counts[icon] = (counts[icon] || 0) + 1));
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  }
}
