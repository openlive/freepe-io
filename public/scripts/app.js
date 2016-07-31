/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name freepe
     * @description
     * Main angular module for app (modules inject).
     */
    angular.module('freepe', [

            // Freepe modules
            'LandingMod',
            'DashboardMod',
            'ProjectMod',
            'ResourceMod',
            'UserMod',
            'OrganizationMod',
            'RegisterMod',
            'LoginMod',

            // Vendor modules
            'ui.router',
            'ngToast',
            'ngCookies'

        ])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        }])
        .run(function ($state) {
            $state.go('landing');
        });
})();
