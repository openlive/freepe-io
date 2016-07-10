/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('OrganizationMod').component('organization', {
    templateUrl: 'views/organization/components/organization_list.html',
    controller: OrganizationController
});

function OrganizationController($scope, $element, $attrs) {
    var ctrl = this;
}
