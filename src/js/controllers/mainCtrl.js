// Invoking IIFE

(function() {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['utilities'];

    function MainCtrl(utilities) {

        var vm = this;

        // your controller body 
    }

})();
