var mod = angular.module('learnerschat.controllers.search', []);

mod.controller('SearchCtrl', function($scope, $state, $stateParams, $ionicListDelegate, ShowsService, UserService) {

  $scope.search = {
    'name':''
  };

  $scope.showService = ShowsService;
  $scope.user = UserService;
});
