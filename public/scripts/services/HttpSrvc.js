/**
 * Created by koc9n on 21.02.16.
 */
(function () {
    'use strict';
    angular.module('freepe').service('HttpSrvc', ['$http', function ($http) {

        this.getProviders = function () {
            return $http.get('/providers');
        };

        this.register = function (data) {
            return $http.put('/auth/local/register', data);
        };

        this.login = function (data) {
            console.log(data);
            return $http.post('/auth/login', data);
        };

        this.loginProvider = function (provider) {
            return $http.get("/auth/" + provider);
        };

        this.logout = function () {
            return $http.delete("/logout");
        };
    }]);
}());
