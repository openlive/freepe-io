angular.module('LoginMod').component('login', {
    templateUrl: 'views/login/components/login.html',
    controller: LoginController
});

function LoginController($rootScope, $scope, $element, $attrs, AuthSrvc) {
    var ctrl = this;
    $scope.user = {};
    $scope.login = function(user) {
        AuthSrvc.login(user);
    };
    $rootScope.isAuthenticated = AuthSrvc.isAuthenticated;
}
