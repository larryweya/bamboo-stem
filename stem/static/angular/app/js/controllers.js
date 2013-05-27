'use strict';

/* Controllers */

angular.module('BambooUI.controllers', [])
    .controller('InfoCtrl', ['$scope', 'BambooAPI', function ($scope, BambooAPI) {
        $scope.info = {};

        var promise = BambooAPI.queryInfo(dataset_id);
        promise.then(function(result){
            $scope.info = result;
        });
    }])
    .controller('CalculationsCtrl', ['$scope', 'BambooAPI', function ($scope, BambooAPI) {
        $scope.calculations = [];
        $scope.new_calculation = {name: null, formula: null};

        BambooAPI.queryCalculations(dataset_id, function(result){
            $scope.calculations = result;
        });

        $scope.createCalculation = function(){
            BambooAPI.addCalculation(
                dataset_id, $scope.new_calculation['name'],
                $scope.new_calculation['formula'], function(result){
                    console.log(result);
                });
        };

        $scope.removeCalculation = function(calculation){
            BambooAPI.removeCalculation(dataset_id, calculation.name);
            $scope.calculations.pop(calculation);
        };
    }])
    .controller('AggregationsCtrl', [function () {

    }]);