'use strict';

angular
    .module('bookingbugApp')
    .constant("baseURL", "https://uk.bookingbug.com/api/v1/") //server IP address
    .constant("companyID", "41285") //company ID
    .factory('bserviceFactory', ['$resource', 'baseURL', 'companyID', function($resource, baseURL, companyID) {
        var bservice = {};

        bservice.getCompanyinfo = function() {
            return $resource(baseURL +  "company/" + companyID + "/", null, {
                query: {
                    method: "GET",
                    isArray: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'App-Id': '5a3d8b8d',
                        'App-Key': '738e9aca62e7465446b7be8fe4219ffa'
                    }
                }
            });
        };

        bservice.getBservices = function() {
            return $resource(baseURL +  companyID + "/services/", null, {
                query: {
                    method: "GET",
                    isArray: false,
                    headers: {
                        'Content-Type': 'application/json',
                        'App-Id': '5a3d8b8d',
                        'App-Key': '738e9aca62e7465446b7be8fe4219ffa'
                    }
                }
            });
        };

        return bservice;
    }]);
