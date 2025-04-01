import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private weatherService: WeatherService, private router: Router) {}

  canActivate(): boolean {
    if (this.weatherService.weatherData()) {
      return true;
    } else {
      this.router.navigate(['/search']);
      return false;
    }
  }
}
