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
        'LandingMod', 'DashboardMod',

        // Vendor modules
        'ui.router'

    ]);
})();
