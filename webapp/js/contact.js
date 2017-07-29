var app = angular.module('contactApp', []);

app.controller('contactCtrl', function($scope) {
    
    $scope.onSubmitContact = function()
    {
        $scope.contactObj = {
                                "name": $scope.name,
                                "email": $scope.email,
                                "number": $scope.number,
                                "message": $scope.message
                            }

        console.log($scope.contactObj)
    }

});
