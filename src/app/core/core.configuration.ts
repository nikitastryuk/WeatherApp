export const configuration = ($locationProvider: angular.ILocationProvider) => {
  'ngInject';
  // No url #
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
};
