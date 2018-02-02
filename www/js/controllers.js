angular.module('app.controllers', [])
  
.controller('relationCheckerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.data = {
		first: "",
		second: "",
		result: "",
		flag: 0
	};
	$scope.calculate = function(){
		var flames = "flames";
		var tflames = "";
		var first = angular.lowercase($scope.data.first);
		var second = angular.lowercase($scope.data.second);
		if(first == second){
			$scope.data.result = "Don't try to fool the app. Re-try with different names....";
			return;
		}
		first = $scope.duplicate(first);
		second = $scope.duplicate(second);
		var result = $scope.combine(first, second);
		for(i = 0; flames.length > 1 && i < 6; i++){
			if(flames.length >= result.length){
				for(j = 0; j < flames.length; j++){
					if(j != result.length-1){
						tflames = tflames + flames[j];
					}
				}
			}
			else{
				k = (result.length % flames.length)
				if(k > 0)
					k = k - 1;
				for(j = 0; j < flames.length; j++){
					if(j != k){
						tflames = tflames + flames[j];
					}
				}
			}
			flames = tflames;
			tflames = "";
		}
		if(flames == "f"){
			$scope.data.result = $scope.data.first + " and " + $scope.data.second + " are friends...";
		}
		else if(flames == "l"){
			$scope.data.result = $scope.data.first + " is in love with " + $scope.data.second + "...";
		}
		else if(flames == "a"){
			$scope.data.result = $scope.data.first + " is atrracted to " + $scope.data.second + "...";
		}
		else if(flames == "m"){
			$scope.data.result = $scope.data.first + " is (going to be) married with " + $scope.data.second + "...";
		}
		else if(flames == "e"){
			$scope.data.result = $scope.data.first + " and " + $scope.data.second + " are enemies..."
		}
		else if(flames == "s"){
			$scope.data.result = $scope.data.first + " and " + $scope.data.second + " are siblings..."
		}
		$scope.data.flag = 1;
	};
	$scope.combine = function(first, second){
		var temp = "";
		var flag = 0;
		for(i = 0; i < first.length; i++){
			for(j = 0; j <second.length && flag == 0; j++){
				if(first[i] == second[j]){
					flag = 1;
				}
			}
			if(flag == 0){
				temp = temp + first[i];
			}
			flag = 0;
		}
		temp = temp + second;
		return temp;
	};
	$scope.duplicate = function(str){
		var temp = "";
		var flag = 0;
		for(i = 0; i < str.length; i++){
			for(j = 0; j < temp.length && flag == 0; j++){
				if(str[i] == temp[j]){
					flag = 1;
				}
			}
			if(flag == 0){
				temp = temp + str[i];
			}
			flag = 0;
		}
		return temp;
	};
}])
   
.controller('relationTipsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('explanationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.counter = $stateParams.counter;
}])
 