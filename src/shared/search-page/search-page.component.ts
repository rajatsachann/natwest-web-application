import { Component } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  standalone: false,
})
export class SearchPageComponent {
  searchQuery = '';

  constructor(public weatherService: WeatherService, private router: Router) {}

  async search() {
    if (!this.searchQuery.trim()) return;

    const formattedCity =
      this.searchQuery.trim().charAt(0).toUpperCase() +
      this.searchQuery.trim().slice(1).toLowerCase();

    const response = await this.weatherService.fetchWeather(formattedCity);

    if (response) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('City not found. Please try another location.');
    }
  }
}
