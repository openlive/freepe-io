/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name OrganizationMod
     * @description
     * Freepe organization page functionality and related logic.
     */
    angular.module('OrganizationMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Resource routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'organization',
                url        : '/organization',
                template   : '<organization></organization>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
