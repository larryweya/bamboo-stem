'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('BambooUI.services', [])
    .value('version', '0.1')
    .service('BambooAPI', ['$q', '$rootScope', function ($q, $rootScope) {
        return {
            queryInfo: function (dataset_id) {
                var deferred = $q.defer();
                var dataset = new bamboo.Dataset({id: dataset_id});
                dataset.query_info(function(result){
                    $rootScope.$apply(function(){
                       deferred.resolve(result);
                    });
                });
                return deferred.promise;
            },
            queryCalculations: function (dataset_id, callback) {
                var dataset = new bamboo.Dataset({id: dataset_id});
                dataset.query_calculations(callback);
            },

            addCalculation: function (dataset_id, name, formula, callback) {
                var dataset = new bamboo.Dataset({id: dataset_id});
                dataset.add_calculation(name, formula, callback);
            },

            removeCalculation: function (dataset_id, name) {
                var dataset = new bamboo.Dataset({id: dataset_id});
                dataset.remove_calculation(name);
            }
        }
    }]);

