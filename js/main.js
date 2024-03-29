var app = angular.module('myApp',[]);
var apiKey = 'MDIxNDEwMDE3MDE0NDg0NTkxNzcxODg2Ng000',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';


app.controller('PlayerController', function($scope, $http) {
  // Hidden our previous section's content
  // construct our http request
  $http({
    method: 'JSONP',
    url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
  }).success(function(data, status) {
    // Now we have a list of the stories (data.list.story)
    // in the data object that the NPR API 
    // returns in JSON that looks like:
    // data: { "list": {
    //   "title": ...
    //   "story": [
    //     { "id": ...
    //       "title": ...
	$scope.programs = data.list.story;
  }).error(function(data, status) {
    // Some error occurred
  });
});
app.controller('RelatedController',['$scope',function($scope){
	
}]);