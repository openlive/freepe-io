/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('DashboardMod').component('dashboard', {
    templateUrl: 'views/dashboard/components/dashboard.html',
    controller: LandingController
});

function LandingController($scope, $element, $attrs) {
    var ctrl = this;
}
