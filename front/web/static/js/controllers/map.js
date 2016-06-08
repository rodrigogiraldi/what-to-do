app.controller('MapCtrl', function ($scope, $http) {

    angular.extend($scope, {
        brazil: {
            lat: -14.235004,
            lng: -51.92528,
            zoom: 4
        },
        defaults: {
            zoomAnimation: false,
            markerZoomAnimation: false,
            fadeAnimation: false
        }});


        $scope.getCitiesList = function () {
            $http
                .get("/event/list_coordinates")
                .then(function (res) {
                    $scope.cities = res.data;
                    
                    $scope.markers = {};
                    for (var i = 0; i < $scope.cities.length; i++){
                        $scope.markers[$scope.cities[i].name] = $scope.cities[i];  
                    }
                    
                    // console.log("mi")
                    // console.log($scope.markers);
                    // console.log("mf")
                    
                    // console.log(res);

                    angular.extend($scope, {
                        defaults: {
                            zoomAnimation: false,
                            markerZoomAnimation: false,
                            fadeAnimation: false
                        },
                        markers: $scope.markers
                        // markers: {
                        //     london: {
                        //         lat: $scope.cities[0].lat,
                        //         lng: $scope.cities[0].lng,
                        //     },
                        //     cambira: {
                        //         lat: -23.5894953,
                        //         lng: -51.5796386,
                        //     },
                        // }
                    });
                });
        };

        //     $http
        //         .get("/event/list_all")
        //         .then(function (res) {
        //             var data = res.data
        //             var cities = [];
        //             for (var i = 0; i < data.length; i++) {
        //                 if (cities.indexOf(data[i].city) === -1) {
        //                     cities.push(data[i].city);
        //                 }
        //             }

        //             var coordinates = [];
        //             for (var i = 0; i < cities.length; i++) {
        //                 $http
        //                     .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + cities[i])
        //                     .then(function (res) {
        //                         coordinates.push(res.data.results[0].geometry.location);
        //                         // console.log(res.data.results[0].geometry.location);


        //                         angular.extend($scope, {
        //                             london: {
        //                                 lat: 50.505,
        //                                 lng: -0.09,
        //                                 zoom: 8
        //                             },
        //                             defaults: {
        //                                 zoomAnimation: false,
        //                                 markerZoomAnimation: false,
        //                                 fadeAnimation: false
        //                             },
        //                             markers: {
        //                                 london: {
        //                                     lat: 51.505,
        //                                     lng: -0.09,
        //                                 },
        //                                 cambira: {
        //                                     lat: -23.5894953,
        //                                     lng: -51.5796386,
        //                                 },
        //                             }
        //                         });


        //                     });
        //             }

        //             console.log(coordinates);


        //             // var coordinates = [];
        //             // for (var i = 0; i < cities.length; i++) {
        //             //     $http
        //             //         .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + cities[i])
        //             //         .then(function (res) {
        //             //             coordinates.push(res.data.results[0].geometry.location);
        //             //         });
        //             // }
        //             // console.log(coordinates);

        //         });
        // };

        // $scope.getCoordinatesList = function () {
        //     // $scope.getCitiesList();
        //     // console.log($scope.cities);

        //     // $http
        //     //     .get("http://maps.googleapis.com/maps/api/geocode/json?address=" + cities[0])
        //     //     .then(function (res) {
        //     //         console.log(res.data);
        //     //     });
        // };

        // angular.extend($scope, {
        //     london: {
        //         lat: $scope.cities[0].lat,
        //         lng: $scope.cities[0].lng,
        //         zoom: 8
        //     },
        //     defaults: {
        //         zoomAnimation: false,
        //         markerZoomAnimation: false,
        //         fadeAnimation: false
        //     },
        //     markers: {
        //         london: {
        //             lat: $scope.cities[0].lat,
        //             lng: $scope.cities[0].lng,
        //         },
        //         cambira: {
        //             lat: -23.5894953,
        //             lng: -51.5796386,
        //         },
        //     }
        // });
    });