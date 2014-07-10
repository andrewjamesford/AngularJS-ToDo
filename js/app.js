(function () {
	 

	var app = angular.module('toDo', [])
		.controller('ToDoController', function($scope){
			
			$scope.todoItems = [];

			$scope.todo = '';

			$scope.addTodo = function() {

				var newTodo = $scope.todo;

				newTodo.createdOn = Date.now();

				$scope.todoItems.push(newTodo);

				$scope.todo = {};
			};

		
  	});


})();