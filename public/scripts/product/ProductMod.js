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
    angular.module('ProductMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Product routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'product',
                url        : '/product',
                template   : '<product></product>'
            },

            {
                name       : 'productList',
                url        : '/productList',
                template   : '<product-list></product-list>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
