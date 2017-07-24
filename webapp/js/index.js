var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.animateDown = function(type)
    {
        switch(type) 
        {
                case 'Product':
                    $('html, body').animate({ scrollTop: 600 }, 1200);
                    break;
                case 'Offering':
                    $('html, body').animate({ scrollTop: 920 }, 1200);
                    break;
                case 'Faq':
                    $('html, body').animate({ scrollTop: 1420 }, 1200);
                    break;
                case 'Service':
                    $('html, body').animate({ scrollTop: 1900 }, 1200);
                     break;
                case 'Contact':
                    $('html, body').animate({ scrollTop: 600 }, 1200);
                    break;
        }
    }

});
