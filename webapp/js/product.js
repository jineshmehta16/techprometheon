var app = angular.module('productApp', []);

app.controller('productCtrl', function($scope, $http) {
    
    $scope.scrollDown = function(type)
    {
        $('html, body').animate({ scrollTop: 230 }, 1200);
    }

     $scope.onSubmitProduct = function()
    {
        if($scope.name == null || $scope.email == null || $scope.number == null)
        {
            $scope.errorMessage= "Please fill all the mandatory fields with asteric"
            $scope.messageClass="error";
            return;
        }

        $scope.productObj = {
                                "name": $scope.name,
                                "email": $scope.email,
                                "number": $scope.number,
                                "city":$scope.city,
                                "purpose":$scope.purpose                                
                            }

        console.log($scope.productObj)
        $http.post('http://localhost/Techprometheon/webapp/webservice/insertProductDetails.php', $scope.productObj)
		.then(
       function(response){
        $scope.messageClass="success";
        $scope.errorMessage= "Your details have been successfully saved!!"
        $scope.name = null;
        $scope.email = null;
        $scope.number = null;
		 
       }, 
       function(response){
         $scope.errorMessage= "Something went wrong ,please try again later!"
         $scope.messageClass="error";
       }
    );

    }

});
