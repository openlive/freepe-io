/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name ProductMod
     * @description
     * Freepe product page functionality and related logic.
     */
    angular.module('ProjectMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Product routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'project',
                url        : '/project',
                template   : '<project></project>'
            },

            {
                name       : 'projectList',
                url        : '/projectList',
                template   : '<project-list></project-list>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
