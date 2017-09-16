var app = angular.module('chatApp', ['ngMaterial']);
app.controller('chatController', function($scope)
	$scope.messages = [];
	{
		text : "Hi1"
	},
	{
		text : "Hi2"
	},
	{
		text : "Hi3"
	},
	{
		text : "Hi4"
	}
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
        var jsonData = JSON.parse(event.data);
        console.log(jsonData);
    };
});