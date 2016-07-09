/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('ProductMod').component('productList', {
    templateUrl: 'views/product/components/product-list.html',
    controller: ProductListController
});

function ProductListController($scope, $element, $attrs) {
    var ctrl = this;
}
