/**
 *  controller for update student details
 *  1.select * from student where id=? - always this query will get executed
 *   
 */
// updatestudentform/:id
app.controller('UpdateStudentCtrl',function($scope,StudentService,$routeParams,$location){
	var id=$routeParams.id
	
	//select * from student where id=?
	
	StudentService.getStudentById(id).then(function(response){
		console.log(response.data)
		$scope.student=response.data
	},function(response){
		
		console.log(response.data)
		console.log(response.status)
	
	})
	$scope.updateStudent=function(student){
		console.log(student)
		StudentService.updateStudent(student).then(function(response){
			$location.path('getallstudents')
		},function(response){
			console.log(response.status)
			console.log(response.data)
		
		})
	}

})