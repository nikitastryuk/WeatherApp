import { WeatherController } from './weather.controller';

export class Weather implements angular.IComponentOptions {
    static selector = 'weather';
    static controller = WeatherController;
    // TODO: Figure out how to import external template
    static template = `<div class="weather" ui-view>Data: {{$ctrl.data}}</div>`;
}
