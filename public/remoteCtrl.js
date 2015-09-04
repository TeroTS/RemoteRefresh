app.controller('remoteCtrl', function($scope, $websocket, $sce) {

  var ws = $websocket.$new('ws://localhost:8001');

  $scope.src = $sce.trustAsResourceUrl("http://hs.fi");

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  ws.$on('text', function (data) {
      console.log('The websocket server has sent the following data:');
      console.log(data);
      // insert dummyvar to url so that browser does not cache the url
      var newUrl = "http://" + data + "?dummyVar=" + (new Date()).getTime();
      $scope.src = $sce.trustAsResourceUrl(newUrl);//{url : newUrl};
      $scope.$apply();
  });

});