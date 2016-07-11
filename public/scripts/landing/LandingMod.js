/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name LandingMod
     * @description
     * Freepe landing page functionality and related logic.
     */
    angular.module('LandingMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Landing routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'landing',
                url        : '/',
                template   : '<landing></landing>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
