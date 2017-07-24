var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.animateDown = function(type)
    {
        console.log('heyyyyyy');
         $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);
    }

});
