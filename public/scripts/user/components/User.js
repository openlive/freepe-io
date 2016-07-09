/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('UserMod').component('user', {
    templateUrl: 'views/user/components/user.html',
    controller: UserController
});

function UserController($scope, $element, $attrs) {
    var ctrl = this;
}
