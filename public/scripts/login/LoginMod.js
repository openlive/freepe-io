(function () {
    'use strict';

    angular.module('LoginMod',['ui.router'])
        .config(configStates);
    /**
     * @ngInject
     * Landing routes
     */
    function configStates ($stateProvider) {
        var states = [

        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();
