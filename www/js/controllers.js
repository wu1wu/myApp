angular.module('starter.controllers', [])




.controller('LocationCtrl', ['$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation) {

  var lastPosition = null;
  $scope.locationError = null;
  $scope.locationHistoty = [];
  $scope.counter = 0;


  var options = { maximumAge: 10000, timeout: 20000, enableHighAccuracy: true };

  $cordovaGeolocation.watchPosition(options).then(function() {
      // Not currently used
    }, function(err) {
      $scope.locationError = err;
    }, function(position) {
      $scope.locationError = null;
      $scope.counter++;
      
      if(!lastPosition || lastPosition.coords.latitude !== position.coords.latitude || lastPosition.coords.longitude !== position.coords.longitude) {
        lastPosition = position;
        $scope.locationHistoty.unshift(position);
      }

  });

}])


.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
