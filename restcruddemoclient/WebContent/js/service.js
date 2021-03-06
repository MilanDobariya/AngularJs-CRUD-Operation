/**
 * Service - studentservice - rest calls
 */
//$http is a predefined services in angular js to make http requests
//$http - get,post,put,patch,delete
app.factory("StudentService",function($http){
	var studentService={}// creating an empty object
	
	studentService.getAllStudents=function(){//to the variable studentservice add a function getAllStudents
	return $http.get("http://localhost:8087/restcruddemomiddleware/getallstudents")
	//http responce[status code and data]
	}
	
	studentService.addStudent=function(student){
	return $http.post("http://localhost:8087/restcruddemomiddleware/savestudent",student)	
	}
	
	
	return studentService;
})