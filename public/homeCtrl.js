app.controller('homeCtrl', function($scope, $websocket) {

  var ws = $websocket.$new('ws://localhost:8001');

  $scope.url = "";

  $scope.submitUrl = function() {
    ws.$emit('text', $scope.url);
  };

  ws.$on('text', function (data) {
      console.log('The websocket server has sent the following data:');
      console.log(data);
  });

});