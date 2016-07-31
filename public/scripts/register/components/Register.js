angular.module('RegisterMod').component('register', {
    templateUrl: 'views/register/components/register.html',
    controller: RegisterController
});

function RegisterController($scope, $element, $attrs, AuthSrvc) {
    var ctrl = this;
    $scope.user = {};
    $scope.login = function(user) {
        AuthSrvc.login(user);
    }
}
