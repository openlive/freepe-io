/**
 * Created by koc9n on 21.02.16.
 */
(function () {
    'use strict';
    angular.module('freepe').service('AuthSrvc', ['$state', 'ToasterSrvc', 'HttpSrvc', 'CookieSrvc',
        function ($state, ToasterSrvc, HttpSrvc, CookieSrvc) {

            var CONSOLE_LOG_PREFIX_SUCCESS = 'SUCCESS: ';
            var CONSOLE_LOG_PREFIX_ERROR = 'ERROR: ';

            this.login = function (usr) {
                angular.toJson(usr, true);
                HttpSrvc.login(usr).then(function (response) {
                    console.log(CONSOLE_LOG_PREFIX_SUCCESS + JSON.stringify(response.data));
                    CookieSrvc.put('user', response.data);
                    ToasterSrvc.toastSuccess(CookieSrvc.get("user"));
                    $state.go("dashboard");
                }, function (reason) {
                    console.log(CONSOLE_LOG_PREFIX_ERROR + JSON.stringify(reason.data));
                    ToasterSrvc.toastError(reason.data.message);
                })
            };

            this.isAuthenticated = function () {
                var user = CookieSrvc.get('user');
                console.log(user);
                return user != null;
            };

            this.logout = function () {
                ToasterSrvc.toastSuccess(CookieSrvc.get("user"));
                CookieSrvc.delete('user');
                $state.go("/");
            }

        }]);
}());
