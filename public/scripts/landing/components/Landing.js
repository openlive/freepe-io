/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('LandingMod').component('landing', {
    templateUrl: 'views/landing/components/landing.html',
    controller: LandingController
});

function LandingController($rootScope, $scope, $element, $attrs, AuthSrvc) {
    var ctrl = this;
}
