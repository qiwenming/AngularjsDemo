/**
 * Created by Administrator on 2016/3/7 0007.
 */
var app = angular.module('myApp',[]);
app.controller('locationCtrl',function($scope,$location){
    $scope.absUrl = $location.absUrl();
    $scope.path = $location.path();
});

/*$http服务*/
app.controller('httpCtrl',function($scope,$http){
    $http.get('http://www.weather.com.cn/data/sk/101010100.html')
        .success(function(response){
            $scope.records = response.records;
        });
});

/**
 * $timeout 服务
 */
app.controller('timeoutCtrl',function($scope,$timeout){
    $scope.timeouttest = '2s后出现奇妙的东东';
    $timeout(function(){
        $scope.timeouttest = 'qiwenmingshiwo';
    },2000);
});

/**
 * $interval 服务
 */
app.controller('intervalCtrl',function($scope,$interval){
    $scope.nowtime = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.nowtime = new Date().toLocaleTimeString();
    },1000);
});

/**
 * 创建自己的服务
 */
app.controller('myServiceCtrl',function($scope,hexafy){
    $scope.numx = hexafy.myFuncX(30);
    $scope.numb = hexafy.myFuncB(30);
});
/**
 * 创建自己的服务
 */
app.service('hexafy',function(){
    //转为16进制
    this.myFuncX = function(x){
      return x.toString(16);
    };
    this.myFuncB = function(x){
        return x.toString(2);
    }
});



///==================================
/**
 * 创建自己的过滤器 并且使用自己创建的服务
 */
app.filter("myFilterX",['hexafy',function(hexafy){
    return function(x) {
        return hexafy.myFuncX(x);
    };
}]);

app.filter("myFilterB",['hexafy',function(hexafy){
    return function(x) {
        return hexafy.myFuncB(x);
    };
}]);
