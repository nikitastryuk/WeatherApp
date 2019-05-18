import * as angular from 'angular';

import { coreModule } from './core/core.module';
import { weatherModule } from './weather/weather.module';

export const appModule = angular.module('application', [coreModule, weatherModule]).name;
