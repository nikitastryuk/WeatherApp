import * as angular from 'angular';

import { routing } from './weather.routes';
import { Weather } from './weather.component';
import { WeatherService } from './weather.service';

export const weatherModule =
  angular.module('application.weather', ['ui.router'])
    .component(Weather.selector, Weather)
    .service(WeatherService.selector, WeatherService)
    .config(routing)
    .name;
