app.controller('musicController', function($scope, $http, API_URL){
  $http.get(API_URL + "all").success(function(response){
    $scope.lib = response;
    console.log("$scope.lib ", $scope.lib);
  });
});
