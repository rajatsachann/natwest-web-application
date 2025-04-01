import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import {
  WeatherItem,
  MainWeather,
  Wind,
  WeatherCard,
} from '../../core/models/weather.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent {
  weatherService = inject(WeatherService);

  cards = computed(() => {
    const current = this.weatherService.weatherData()?.list?.[0];
    if (!current) return [];

    return [
      this.createWindCard(current.wind, current.main),
      this.createClothingCard(current.main),
      this.createHumidityCard(current.main),
      this.createVisibilityCard(current),
    ].filter((card): card is WeatherCard => card !== undefined);
  });

  private createWindCard(wind: Wind, main: MainWeather): WeatherCard {
    const speed = wind.speed;
    return {
      title: 'Wind',
      icon: this.getWindIcon(speed),
      description: `${speed.toFixed(1)} km/h`,
      footer: this.getWindDescription(speed),
    };
  }

  private createClothingCard(main: MainWeather): WeatherCard {
    const temp = main.temp;
    return {
      title: 'What to Wear',
      icon: this.getClothingIcon(temp),
      description: this.getClothingSuggestion(temp),
      footer: this.getTempDescription(temp),
    };
  }

  private createHumidityCard(main: MainWeather): WeatherCard {
    const humidity = main.humidity;
    return {
      title: 'Humidity',
      icon: this.getHumidityIcon(humidity),
      description: `${humidity}%`,
      footer: this.getHumidityDescription(humidity),
    };
  }

  private createVisibilityCard(data: WeatherItem): WeatherCard | undefined {
    if (typeof data.visibility !== 'number') return undefined;

    const visibility = data.visibility / 1000;
    return {
      title: 'Visibility',
      icon: this.getVisibilityIcon(data.visibility),
      description: `${visibility.toFixed(1)} km`,
      footer: this.getVisibilityDescription(data.visibility),
    };
  }

  // Icon getters with proper typing
  private getWindIcon(speed: number): string {
    if (speed < 5) return 'assets/icons/wind-low.png';
    if (speed < 20) return 'assets/icons/wind-medium.png';
    return 'assets/icons/wind-high.png';
  }

  private getClothingIcon(temp: number): string {
    if (temp < 10) return 'assets/icons/clothing-winter.png';
    if (temp < 20) return 'assets/icons/clothing-jacket.png';
    return 'assets/icons/clothing-summer.png';
  }

  private getHumidityIcon(humidity: number): string {
    if (humidity < 40) return 'assets/icons/humidity-low.png';
    if (humidity < 70) return 'assets/icons/humidity-medium.png';
    return 'assets/icons/humidity-high.png';
  }

  private getVisibilityIcon(visibility: number): string {
    if (visibility < 1000) return 'assets/icons/visibility-low.png';
    if (visibility < 5000) return 'assets/icons/visibility-medium.png';
    return 'assets/icons/visibility-high.png';
  }

  // Description helpers with proper typing
  private getClothingSuggestion(temp: number): string {
    if (temp < 0) return 'Heavy Winter Clothes';
    if (temp < 10) return 'Coat, sweater';
    if (temp < 20) return 'Light jacket';
    if (temp < 30) return 'T-shirt, shorts';
    return 'Light clothing, sunscreen';
  }

  private getTempDescription(temp: number): string {
    if (temp < 0) return 'Freezing';
    if (temp < 10) return 'Cold';
    if (temp < 20) return 'Cool';
    if (temp < 30) return 'Warm';
    return 'Hot';
  }

  private getHumidityDescription(humidity: number): string {
    if (humidity < 40) return 'Dry';
    if (humidity < 70) return 'Comfortable';
    return 'Humid';
  }

  private getVisibilityDescription(visibility: number): string {
    if (visibility < 1000) return 'Foggy';
    if (visibility < 5000) return 'Hazy';
    return 'Clear';
  }

  private getWindDescription(speed: number): string {
    if (speed < 5) return 'Calm';
    if (speed < 20) return 'Breezy';
    return 'Windy';
  }
}
