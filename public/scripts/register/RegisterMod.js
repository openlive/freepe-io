(function () {
    'use strict';

    angular.module('RegisterMod', ['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Landing routes
     */
    function configStates ($stateProvider) {
        var states = [
            {
                name       : 'register',
                url        : '/register',
                template   : '<register></register>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
