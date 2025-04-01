import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';

@Component({
  selector: 'app-todays-forecast',
  standalone: false,
  templateUrl: './todays-forecast.component.html',
  styleUrl: './todays-forecast.component.scss',
})
export class TodaysForecastComponent {
  constructor(public weatherService: WeatherService) {}
}
