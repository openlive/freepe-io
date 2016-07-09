/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name DashboardMod
     * @description
     * Freepe dashboard page functionality and related logic.
     */
    angular.module('DashboardMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Landing routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'dashboard',
                url        : '/dashboard',
                template   : '<dashboard></dashboard>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
