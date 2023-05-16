(function() {
  angular.module('InventarioApp', [])
    .controller('InventarioCtrl', inventarioCtrlFn);

  inventarioCtrlFn.$inject = ['$scope', '$log'];
  
  function inventarioCtrlFn ($scope, $log) {
    $log.debug('Iniciando InventarioCtrl');
    $scope.valorTest = 'UNO';
    var foto1 = 'https://i.ebayimg.com/images/g/12EAAOSwtVpe0pte/s-l640.jpg';
    var foto2 = 'https://tse2.mm.bing.net/th?id=OIP.uuUcgsegtswPMgcnh-K5xwHaE8&pid=Api&P=0&h=180';
    var foto3 = 'https://tse1.mm.bing.net/th?id=OIP.yzpVUHtJLM7kbuQG8FbRxAHaC1&pid=Api&P=0&h=180' ;
    
    $scope.items = {};
    $scope.items.categoriaA = [];
    $scope.items.categoriaA.push({ref:'REF00001', desc:'Iphone, ', img:foto1});
    $scope.items.categoriaA.push({ref:'REF00002', desc:'Macbook, ', img:foto2});
    $scope.items.categoriaA.push({ref:'REF00003', desc:'Macbook pro Deluxe', img:foto3});
    $scope.items.categoriaA.push({ref:'REF00004', desc:'Iphone10,', img:foto1});
    $scope.items.categoriaA.push({ref:'REF00005', desc:'Iphone9, ', img:foto1});
    $scope.items.categoriaA.push({ref:'REF00006', desc:'Iphone8,', img:foto1});
        
    $scope.items.categoriaB = [];
    $scope.items.categoriaB.push({ref:'REF10001', desc:'Cosa 1, cosa rara', img:foto2});
    $scope.items.categoriaB.push({ref:'REF10002', desc:'Cosa 2, cosa rara', img:foto2});
    $scope.items.categoriaB.push({ref:'REF10003', desc:'Cosa 3, cosa rara', img:foto2});
    $scope.items.categoriaB.push({ref:'REF10004', desc:'Cosa 4, cosa rara', img:foto2});
    $scope.items.categoriaB.push({ref:'REF10005', desc:'Cosa 5, cosa rara', img:foto2});
        
    $scope.items.categoriaC = [];
    $scope.items.categoriaC.push({ref:'REF20001', desc:'Esto es un 1', img:foto3});
    $scope.items.categoriaC.push({ref:'REF20002', desc:'Esto es un 2', img:foto3});
    $scope.items.categoriaC.push({ref:'REF20003', desc:'Esto es un 3', img:foto3});
    $scope.items.categoriaC.push({ref:'REF20004', desc:'Esto es un 4', img:foto3});
    $scope.items.categoriaC.push({ref:'REF20005', desc:'Esto es un 5', img:foto3});
    
    $scope.listaCategorias = Object.keys($scope.items);
    $scope.categoria = $scope.listaCategorias[0];
    $scope.actualizaCategoria = function (){
      $scope.listaItems = $scope.items[$scope.categoria];
    }
    $scope.actualizaCategoria();    
  }
})();