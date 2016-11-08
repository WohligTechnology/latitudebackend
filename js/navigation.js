var adminurl = "http://104.155.129.33:92/";
// var adminurl = "http://localhost:1337/";
//var adminurl = "http://192.168.1.116:1337/";
var uploadurl = adminurl + "upload/";
var imgpath = uploadurl + "readFile/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Enquiry",
        classis: "active",
        link: "#/page/viewEnquiry",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        link: "#/page/viewContactUs",
        subnav: []
    }
     , {
         name: "Smash",
         classis: "active",
         link: "#/page/viewSmash",
         subnav: []
     }, {
         name: "1899 Latitude",
         classis: "active",
         link: "#/page/viewLatitude",
         subnav: []
     }, {
         name: "Both",
         classis: "active",
         link: "#/page/viewBoth",
         subnav: []
     }
    
    ];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        savedataApi: function (data, apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
        },
        deleteProject: function (data, successCallback, errorCallback) {
            $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function (apiName, urlParams, successCallback, errorCallback) {
            console.log(adminurl + apiName);
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },
        sideMenu1: function (apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        submitLogin: function (data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function (data, successCallback, errorCallback) {
            $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
        },
        getDropDown: function (apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },
        logout: function (successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },

    };
});