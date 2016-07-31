/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('DashboardMod').component('dashboard', {
    templateUrl: 'views/dashboard/components/dashboard.html',
    controller: DashboardController
});

function DashboardController($scope, $element, $attrs, AuthSrvc) {
    var ctrl = this;
    $scope.logout = function() {
        AuthSrvc.logout();
    }
}
