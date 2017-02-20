(function () {
  'use strict';

  angular
    .module('appDonateApp')
    .controller('LoginController', LoginController);

  function LoginController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();