var app = angular.module('contactApp', []);

app.controller('contactCtrl', function($scope,$http) {
    
    $scope.onSubmitContact = function()
    {
        if($scope.name == null || $scope.email == null || $scope.number == null || $scope.message == null)
        {
            $scope.errorMessage= "Please fill all the mandatory fields with asteric"
            $scope.messageClass="error";
            return;
        }

        $scope.contactObj = {
                                "name": $scope.name,
                                "email": $scope.email,
                                "number": $scope.number,
                                "message": $scope.message
                            }

        $http.post('http://localhost/Techprometheon/webapp/webservice/insertContactDetails.php', $scope.contactObj)
		.then(
       function(response){
        $scope.messageClass="success";
        $scope.errorMessage= "Your details have been successfully saved!!"
        $scope.name = null;
        $scope.email = null;
        $scope.number = null;
        $scope.message = null;
		 
       }, 
       function(response){
         $scope.errorMessage= "Something went wrong ,please try again later!"
         $scope.messageClass="error";
       }
    );

    }

});
