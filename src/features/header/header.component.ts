import { Component, effect } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public weatherService: WeatherService, private router: Router) {}

  returnToSearch() {
    this.weatherService.clearWeatherData();
    this.router.navigate(['/search']);
  }
}
