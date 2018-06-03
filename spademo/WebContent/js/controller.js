/**
 * Controller
 * 1.select * from student - always gets executed
 */
app.controller('StudentCtrl',function($scope,$location,StudentService,$routeParams){
	//http responce[status code and data]
	//success, failure
	//success - 200 ok
	//failure - 500 Internal server error
	//returned value is HTTP Responce [status, data]
	function getAllStudents(){
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
	}
	//studentform.html
	$scope.addStudent=function(student){          //200-299
		//http responce [status,data]
		//success-200, data{id,name,age,dept}
		//failure-500, data in HTML format
		StudentService.addStudent(student).then(function(responce){
			console.log(responce.status)//200
			console.log(responce.data)//student object is JSON {
			$location.path('/getallstudents')
		},function(responce){ //other status code
			console.log(responce.status)
		})
	}
	
	$scope.getStudentById=function(id){
	StudentService.getStudentById(id).then(function(response){
		console.log(response.status)//200
		$scope.student=response.data;
	},function(response){ //response.status
		if(response.status==404)
			$scope.errorMessage="DATA NOT FOUND" //response.data is empty
			else
				$scope.error=response.data //errorClazz
		
	})
	//Either student variable /errorMessage / error variable will get initialized
	}
	//studentslist.html
	$scope.deleteStudent=function(id){
		StudentService.deleteStudent(id).then(function(response){
			console.log(response.status)//200
			console.log(response.data)//""
			getAllStudents()
		},function(response){
			alert('student details cannot be deleted')
			console.log(response.data)
		})
	}
	getAllStudents()//statement which will always gets executed when StudentController created

    var id=$routeParams.id // always gets executed
	
	//select * from student where id=?
	if(id!=undefined){
	StudentService.getStudentById(id).then(function(response){
		console.log(response.data)
		$scope.student=response.data
	},function(response){
		
		console.log(response.data)
		console.log(response.status)
	
	})
	}
	$scope.updateStudent=function(student){
		console.log(student)
	}
})