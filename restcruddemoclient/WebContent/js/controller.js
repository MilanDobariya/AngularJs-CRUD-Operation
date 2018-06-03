/**
 * Controller
 */
app.controller('StudentCtrl',function($scope,StudentService){
	//http responce[status code and data]
	//success, failure
	//success - 200 ok
	//failure - 500 Internal server error
	StudentService.getAllStudents().then(function(responce){//responce.status is in
		//responce [status,data]
		//{200,[{"id":1,"name":"John","age":20,"dept":"CSE"}]}
		$scope.students=responce.data
		console.log(responce.data)
		console.log(responce.status)
		
	},function(responce){//responce.status is not in the range 200 to 299
		console.log(response.status)
		console.log(response.data)
	})
	
	$scope.addStudent=function(student){
		StudentService.addStudent(student).then(function(responce){
			
		},function(responce){
			console.log(responce.status)
		})
	}
})