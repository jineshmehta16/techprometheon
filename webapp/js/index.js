var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.animateDown = function(type)
    {
        switch(type) 
        {
                case 'About':
                    $('html, body').animate({ scrollTop: 600 }, 1200);
                    break;
                case 'Product':
                    $('html, body').animate({ scrollTop: 850 }, 1200);
                    break;
                case 'Offering':
                    $('html, body').animate({ scrollTop: 1150 }, 1200);
                    break;
                case 'Faq':
                    $('html, body').animate({ scrollTop: 1650 }, 1200);
                    break;
                case 'Service':
                    $('html, body').animate({ scrollTop: 2100 }, 1200);
                     break;

        }
    }

});
