/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name ResourceMod
     * @description
     * Freepe resource page functionality and related logic.
     */
    angular.module('ResourceMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Resource routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'resource',
                url        : '/resource',
                template   : '<resource></resource>'
            },

            {
                name       : 'resourcesList',
                url        : '/resourcesList',
                template   : '<resources-list></resources-list>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
