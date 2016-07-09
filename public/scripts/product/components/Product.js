/**
 * @author Max Budnyk <maxbudnik64@gmail.com>
 */

angular.module('ProductMod').component('product', {
    templateUrl: 'views/product/components/product.html',
    controller: ProductController
});

function ProductController($scope, $element, $attrs) {
    var ctrl = this;
}
