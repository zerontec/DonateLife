/*globals angular */
"use strict";

/**
 * @ngdoc function
 * @name appDonateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appDonateApp
 */
angular.module("appDonateApp" )

 
//create donors
.controller("DonorController", [ "$scope","mydonorFactory","$state", "$stateParams", function ($scope,mydonorFactory, $state, $stateParams  ) {
    
    
$scope.imageblood ='';
    $scope.imageb ="A";
    
    
    
 mydonorFactory.query(
        function (response) {
            $scope.mydonors = response;
            $scope.showDonor = true;

        });
    
    
   $scope.mydonor = {
                name: "",
                bloodtype: "",
                location: "",
                email:"",
                telf:""
                
    };

    $scope.submitDonor = function () {

      mydonorFactory.save( $scope.mydonor);

    
        $scope.mydonor = {
                name: "",
                bloodtype: "",
                location: "",
                email:"",
                telf:""
            
        };
        
        
     
        
          window.location.href = '/#!/find';
    }
    
    
    
   $scope.option= function( option ){
            
           $scope.imageb= option;
           
           if (option === "A+"){
               
               $scope.imageblood = "A+";
               } else if (option === "A-"){
                $scope.imageblood = "A-";
           } else if (option === "B-"){
                      $scope.imageblood = "B-";
                      }
                      else{
                      $scope.imageblood =""
                      }
        };
     
     
    

    
   
    

    
}])


//Search 

 .controller("findDonorController", ["$scope","donorFactory","newdonorFactory", "$stateParams","$state",  function ($scope, donorFactory ) 
                                     {
        donorFactory.query(
        function (response) {
            $scope.donors = response;
            $scope.showDonor = true;

        });
                                
             
                                
  
}])



    

///////////////PERFIL DETAILS//////////

    .controller("PerfilDetailsController", ["$scope", "$state", "$stateParams", "favoriteFactory","mydonorFactory",   function ($scope, $state, $stateParams, newdonorFactory, mydonorFactory ) {

    $scope.mydonor = {};
    $scope.showDonor = false;
    $scope.message = "Loading ...";

    $scope.mydonor = mydonorFactory.get({
            id: $stateParams.id
        })
        .$promise.then(
            function (response) {
                $scope.mydonor = response;
                $scope.showDonor = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

$scope.mycomment = {
       name: "",
        email: "",
    comment:"",
    location:"",
    };

    $scope.submitComment = function () {

        newdonorFactory.save({id: $stateParams.id}, $scope.mycomment);

        $state.go($state.current, {}, {reload: true});
        
      
    };
    
     

}])

///////////WRITE //////////////


.controller("WriteController", ["$scope", "feedbackFactory", function ($scope, feedbackFactory) {

    $scope.feedback = {
        mychannel: "",
        yourname: "",
        email: ""
        
    };


    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

    $scope.sendFeedback = function () {


        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
            $scope.invalidChannelSelection = true;
        } else {
            $scope.invalidChannelSelection = false;
            feedbackFactory.save($scope.feedback);
            $scope.feedback = {
                mychannel: "",
                yourName: "",
                email: ""
                
            };
            $scope.feedback.mychannel = "";
            $scope.feedbackForm.$setPristine();
        }
    };
}])


.controller("infoController", [
    "$scope", "infoFactory",function ($scope,infoFactory)                             {
        infoFactory.query(
        function (response) {
            $scope.infos = response;
            $scope.showInfo = true;

        }); 
}
    
])



.controller("AboutController", ["$scope", "teamFactory", function ($scope, teamFactory) {

   
    
                                  {
        teamFactory.query(
        function (response) {
            $scope.teams = response;
            $scope.showTeam = true;

        });
                   
    
    
    
}}])

.controller("HomeController", ["$scope",   "infoFactory","needFactory","mydonorFactory", function ($scope,  infoFactory, needFactory,mydonorFactory ) {
    
    
    
   var mydonor = mydonorFactory.query({
            featured: "true"
        })
        .$promise.then(
            function (response) {
                var mydonors = response;
                $scope.mydonor = mydonors[0];
                $scope.showDonor = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    $scope.info = infoFactory.query({
            featured: "true"
        })
        .$promise.then(
            function (response) {
                var infos = response;
                $scope.info= infos[0];
                $scope.showInfo = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    
    $scope.serv = needFactory.query({
            featured: "true"
        })
        .$promise.then(
            function (response) {
                var servs= response;
                $scope.serv= servs[0];
                $scope.showNeed = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    
}])


.controller("ServController", [
    "$scope","needFactory", function ($scope,needFactory){
        
        needFactory.query(
        function (response) {
            $scope.servs= response;
            $scope.showNeed = true;

        });
        
        $scope.serv ={
            
            name:"",
            asunto:"",
            need:"",
            email:"",
            telf:""  
        };
        $scope.submitServ = function(){
            
            needFactory.save($scope.serv);
            
        $scope.serv ={
            
            name:"",
            asunto:"",
            need:"",
            email:"",
            telf:""  
        };
           $state.go($state.current, {}, {reload: true});

            
        }
        
        

    
    
    }])

.controller("NeedDetailController", ["$scope", "$state", "$stateParams", "needFactory",  function ($scope, $state, $stateParams, needFactory ) {

    $scope.serv = {};
    $scope.showServ = false;
    $scope.message = "Loading ...";

    $scope.serv = needFactory.get({
            id: $stateParams.id
        })
        .$promise.then(
            function (response) {
                $scope.serv = response;
                $scope.showServ = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

    
}])





    .controller("FavoriteController", ["$scope", "$state", "favoriteFactory", function ($scope, $state, favoriteFactory) {

    $scope.tab = 1;
    $scope.filtText = "";
    $scope.showDetails = false;
    $scope.showDelete = false;
    $scope.showMenu = false;
    $scope.message = "Loading ...";

    favoriteFactory.query(
        function (response) {
            $scope.donors = response.donors;
            $scope.showMenu = true;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
    
    
    
    
      $scope.deleteFavorite = function(donorid) {
        console.log("Delete favorites", donorid);
        favoriteFactory.delete({id: donorid});
        $scope.showDelete = !$scope.showDelete;
        $state.go($state.current, {}, {reload: true});
    };
    }])
        .controller("HeaderController", ["$scope", "$state", "$rootScope", "ngDialog",  function ($scope, $state, $rootScope, ngDialog,AuthFactory ) {

    $scope.loggedIn = false;
    $scope.username = "";
   
    
    if(AuthFactory) {
        $scope.loggedIn = true;
        $scope.username = AuthFactory.getUsername();
    }
        
    $scope.openLogin = function () {
        ngDialog.open({ template: "views/login.html", scope: $scope, className: "ngdialog-theme-default", controller:"LoginController" });
    };
    
    $scope.logOut = function() {
       AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = "";
    };
    
    $rootScope.$on("login:Successful", function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
        
    $rootScope.$on("registration:Successful", function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
    
    $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
    
}])

    .controller("LoginController", ["$scope", "ngDialog","$localStorage","AuthFactory", function ($scope, ngDialog, $localStorage, AuthFactory) {
    
    $scope.loginData = $localStorage.getObject("userinfo","{}");
    
    $scope.doLogin = function() {
        if($scope.rememberMe)
           $localStorage.storeObject("userinfo",$scope.loginData);

        AuthFactory.login($scope.loginData);

        ngDialog.close();

    };
            
    $scope.openRegister = function () {
        ngDialog.open({ template: "views/register.html", scope: $scope, className: "ngdialog-theme-default", controller:"RegisterController" });
    };
    
}])

.controller("RegisterController", ["$scope", "ngDialog", "$localStorage", "AuthFactory", function ($scope, ngDialog, AuthFactory) {
    
    $scope.register={};
    $scope.loginData={};
    
    $scope.doRegister = function() {
        console.log("Doing registration", $scope.registration);

        AuthFactory.register($scope.registration);
        
        ngDialog.close();

    };
      
   

}])

