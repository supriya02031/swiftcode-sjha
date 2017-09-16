var app = angular.module('chatApp', ['ngMaterial']);
app.controller('chatController', function($scope){
	$scope.messages = [
	{
		sender: "BOT",
		text : "Hiii",
		time : "1.12"
	},
	{
		sender: "USER",
		text : "what is this",
		time: "1.13"
	},
	{
		sender: "BOT",
		text : "an image",
		time : "2.20"
	}
	];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
        var jsonData = JSON.parse(event.data);
        console.log(jsonData);
    };
});