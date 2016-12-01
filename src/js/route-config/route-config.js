/**
 * Config for the router
 */

(function() {
    angular
        .module('app')
        .config(configure);

    var baseUrl = "dist/views/"

    function configure($stateProvider, $urlRouterProvider, $locationProvider) {

        // formating hashed url
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        // declare all states parameters here
        var home = {
            name: "home",
            url: "/",
            templateUrl: baseUrl + "/web/landing.html",
            controller: 'MainCtrl',
            controllerAs: 'main',
            title: "Welcome"
        }

        

        // call all states here
        $stateProvider.state(home);

        // define your configs here
        
        $urlRouterProvider.otherwise("/");

    }

})();

// define run block here
(function() {

    angular
        .module('app')
        .run(runFunc);

    function runFunc($rootScope, $state, utilities, $window) {
        
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            // Save the route title
            $rootScope.pageTitle = $state.current.title;
            // alert($rootScope.pageTitle)
        });

    };
})();
