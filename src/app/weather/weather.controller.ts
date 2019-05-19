import { WeatherService } from './weather.service';

// TODO: Move to shared models
export interface IForecast {
    city: string;
    description: string;
    tmp: number;
    wind: number;
    humidity: number;
}

export class WeatherController {
    cities: string[] = [];
    forecast: IForecast = null;
    search: string = '';
    isLoading: boolean = true;
    // TODO: Encapsulate search dropdown logic
    isListOpened: boolean = false;

    constructor(
        private weatherService: WeatherService,
    ) {
        'ngInject';
    }
    autoComplete() {
        this.cities = this.weatherService.getCity(this.search);
        console.log(this.cities);
    }
    async selectCity(city: string) {
        this.search = city;
        this.isListOpened = false;
        this.forecast = this.weatherService.getForecast(city);
    }
}
