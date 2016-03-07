/**
 * Created by Administrator on 2016/3/7 0007.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.name = "杞文明";
    $scope.name1 = "woshixiaoming01";
    $scope.name2 = "woshixiaoming02";
});
app.controller('namesCtrl',function($scope){
    $scope.persons = [
        {name:"qwm",age:25},
        {name:"qxm",age:20},
        {name:"xmm",age:16}
    ];
});
