(function () {
    angular
        .module("appointmentReminderModule")
        .controller("indexCtrl", ["$scope","profileService", indexCtrl]);

    function indexCtrl($scope,profileService) {

        $scope.profileExists = function () {
            return (profileService.getProfile() != null);
        }

    }
}());