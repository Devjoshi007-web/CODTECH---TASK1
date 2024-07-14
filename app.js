let SmartwatchApp = angular.module("SmartwatchApp",
["SmartwatchCtrl","Smartwatchfilters","ngRoute","ngSanitize","ngQuill",]);
SmartwatchApp.config([
 "$routeProvider",
 "ngQuillConfigProvider",
 function ($routeProvider, ngQuillConfigProvider) {
 ngQuillConfigProvider.set();
 $routeProvider
 .when("/", {
 templateUrl: "./components/about.html",
 controller: "aboutCtrl",
 })
 .when("/categories", {
 templateUrl: "./components/categories.html",
 controller: "categoriesCtrl",
 })
 .when("/watches", {
 templateUrl: "./components/watches.html",
 controller: "watchListCtrl",
 })
 .when("/watches/new", {
 templateUrl: "./components/Newwatch.html",
 controller: "watchAddCtrl",
 })
 .when("/watches/details/:id", {
 templateUrl: "./components/watchdetail.html",
 controller: "watchDetailCtrl",
 })
 .when("/watches/edit/:id", {
 templateUrl: "./components/watchedit.html",
 controller: "watchEditCtrl",
 })
 .otherwise({ templateUrl: "./components/404.html" });
 },
]);
SmartwatchApp.run(function ($rootScope, $http, $location) { 
$http.get("json/about.json").then(function (res) {
 $rootScope.aboutData = res.data;
 });
 $http.get("json/categories.json").then(function (res) {
 $rootScope.categories = res.data;
 });
 $http.get("json/watches.json").then(function (res) {
 $rootScope.watches = res.data;
 });
 $rootScope.$on("$locationChangeSuccess", function () {
 console.log($location.path());
 $rootScope.page = $location.path();
 });
});
