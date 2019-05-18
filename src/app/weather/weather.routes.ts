import { Weather } from './weather.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('weather', {
      parent: 'app',
      url: 'weather',
      component: Weather.selector
    });

};
