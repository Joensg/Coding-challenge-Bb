'use strict';

angular
    .module('bookingbugApp')
    .controller('BservicesController', ['$scope', 'bserviceFactory', function($scope, bserviceFactory) {

        bserviceFactory.getCompanyinfo().query( //get company info from server
            function(response) {
                $scope.companyId = response.id;
                $scope.companyName = response.name;
                $scope.companyDescription = response.description;
            },
            function(response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

        bserviceFactory.getBservices().query( //get bservice info from server
            function(response) {
                $scope.totalservices = response.total_entries;
                $scope.bservices = response._embedded.services;
            },
            function(response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    }])

    .directive('myBservices', function() {
        return {
            restrict: 'E',
            scope: {
                bserviceInfo: '=info'
            },
            templateUrl: 'views/my-bservices.html'
        };
    });
