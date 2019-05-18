import { WeatherService } from './weather.service';

export class WeatherController {
    data: string = 'initialValue';

    constructor(
        private weatherService: WeatherService,
    ) {
        'ngInject';
    }
    async $onInit() {
        const response = await this.weatherService.getCity('New York');
        console.log(response);
        // TODO: Figure out update
        this.data = 'fetchedValue';
    }
}
