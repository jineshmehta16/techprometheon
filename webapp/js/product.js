var app = angular.module('productApp', []);

app.controller('productCtrl', function($scope) {
    
    $scope.scrollDown = function(type)
    {
        $('html, body').animate({ scrollTop: 230 }, 1200);
    }

});
