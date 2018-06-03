/**
 * Modular
 */
var app=angular.module("app",['ngRoute'])//load angular-route.js
app.config(function($routeProvider){
	//http://localhost:8080/..../index.html#/home
	//http://localhost:8080/..../index.html#/aboutus
	//http://localhost:8080/..../index.html#/addstudent
	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
			})
	.when('/aboutus',{
		templateUrl:'views/aboutus.html'
	})
	.when('/addstudent',{
		controller:'StudentCtrl',
	templateUrl:'views/studentform.html'
	})
	.when('/getallstudents',{
		controller:'StudentCtrl',
		templateUrl:'views/studentlist.html'
	})
	.when('/updatestudentform/:id',{
		controller:'UpdateStudentCtrl',//student object for the given id
		templateUrl:'views/updatestudentform.html'
	})
	
	.otherwise('/',{templateUrl:'views/home.html'})

})