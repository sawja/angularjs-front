angular.module('app', ['ui.router', 'ui.bootstrap'])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        for (const value of routes) { 
            $stateProvider.state(value) 
        }
    })