/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name UserMod
     * @description
     * Freepe user page functionality and related logic.
     */
    angular.module('UserMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Resource routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'user',
                url        : '/me',
                template   : '<user></user>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
