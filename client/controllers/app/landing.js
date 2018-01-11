angular.module('app').controller('app_landing', app_landing);
function app_landing($scope, app) {
    'use strict';
    app.init($scope);
    $scope.incrementQuant = function () {
        $scope.data.quantity++;
    };
    $scope.decrementQuant = function () {
        if ($scope.data.quantity > 0) {
            $scope.data.quantity--;
        }
    };
}