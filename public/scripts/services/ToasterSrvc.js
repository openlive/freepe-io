/**
 * Created by koc9n on 28.03.16.
 */
(function () {
    'use strict';

    angular.module('freepe').service('ToasterSrvc', ['ngToast', function (ngToast) {
        var settings = {
            timeout: 3000
        };

        this.toastError = function (msg) {
            ngToast.create({
                timeout: settings.timeout,
                className: 'danger',
                content: '<span>' + msg + '</span>'
            });
        };
        this.toastSuccess = function (msg) {
            ngToast.create({
                timeout: settings.timeout,
                className: 'success',
                content: '<span>success logged in:' + msg + '</span>'
            });
        }

        this.toastInfo = function (msg) {
            ngToast.create({
                timeout: settings.timeout,
                className: 'success',
                content: '<span>success logged in:' + msg + '</span>'
            });
        }
    }]);
}());
