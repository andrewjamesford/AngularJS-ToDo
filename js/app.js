
	 

	var app = angular.module('toDo', ['firebase']);

	app.controller('ToDoController', function($scope, $firebase){
			
			var ref = new Firebase("https://todo-app-demo.firebaseio.com/");

			$scope.todoItems = $firebase(ref);

			$scope.todo = '';

			$scope.addTodo = function() {

				var newTodo = $scope.todo;

				newTodo.createdOn = Date.now();
				newTodo.completed = false;

				$scope.todoItems.$add(newTodo);

				$scope.todo = {};
			};

			$scope.deleteTodo = function(id) {

				$scope.todoItems.$remove(id);
			};
  	});


