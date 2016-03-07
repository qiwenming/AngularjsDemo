/**
 * Created by Administrator on 2016/3/7 0007.
 */
var app = angular.module('myApp',[]);
app.controller('upFilterCtrl',function($scope){
    $scope.name1 = "qiwenmingshiwo";
    $scope.name2 = "QiwenMingShiWO";
    $scope.filterxx = 123654;
    $scope.persons = [
        {name:"ff",age:50},
        {name:"ss",age:20},
        {name:"qw",age:30},
        {name:"ge",age:11},
        {name:"ag",age:48},
        {name:"hr",age:35},
        {name:"hs",age:24},
        {name:"rh",age:88},
        {name:"th",age:22}
    ];
});
