angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('relationChecker', {
    url: '/page1',
    templateUrl: 'templates/relationChecker.html',
    controller: 'relationCheckerCtrl'
  })

  .state('relationTips', {
    url: '/page2',
    templateUrl: 'templates/relationTips.html',
    controller: 'relationTipsCtrl'
  })

  .state('explanation', {
    url: '/page3',
	params: {
		counter: "0"		
},
    templateUrl: 'templates/explanation.html',
    controller: 'explanationCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});