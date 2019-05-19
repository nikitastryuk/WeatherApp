import { WeatherController } from './weather.controller';
import './weather.scss';

export class Weather implements angular.IComponentOptions {
    static selector = 'weather';
    static controller = WeatherController;
    // TODO: Is it correct way to import external template???
    static template = require('./weather.template.html');
}
