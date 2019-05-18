export class WeatherService {
  static selector = 'weatherService';

  constructor(
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }

  getCity(input: string): any {
    const url = `https://autocomplete.wunderground.com/aq?query=${input}`;
    return this.$http.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
