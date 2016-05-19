var plm = angular.module('plm', [])
    .controller('mainCtrl', MainCtrl);

function MainCtrl($scope) {
    $scope.title = 'Personal Library Management';
}