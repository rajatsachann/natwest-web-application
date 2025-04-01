import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodaysForecastComponent } from '../features/todays-forecast/todays-forecast.component';
import { FutureForecastComponent } from '../features/future-forecast/future-forecast.component';
import { CardComponent } from '../shared/card/card.component';
import { HeaderComponent } from '../features/header/header.component';
import { WeatherService } from '../core/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { CardDetailsComponent } from '../shared/card-details/card-details.component';
import { SearchPageComponent } from '../shared/search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodaysForecastComponent,
    FutureForecastComponent,
    CardComponent,
    CardDetailsComponent,
    SearchPageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    DatePipe,
    FormsModule,
  ],
  providers: [WeatherService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
