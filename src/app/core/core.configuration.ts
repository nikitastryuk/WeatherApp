export const configuration = ($locationProvider: angular.ILocationProvider) => {
  'ngInject';
  // TODO: Remove # from url
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
};
