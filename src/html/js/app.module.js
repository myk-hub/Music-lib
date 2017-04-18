'use strict';

var musLibModule = angular.module('musLib', []);

angular.module('musLib', [])
.controller('showList', function($scope, $http) {
    $http.get('src/api/albums.js').
        then(function(response) {
            $scope.greeting = response.id;
            console.log(
              $scope.greeting
            );
        });
});
