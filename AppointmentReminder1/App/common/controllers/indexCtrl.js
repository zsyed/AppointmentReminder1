(function () {
    angular
        .module("appointmentReminderModule")
        .controller("indexCtrl", ["$scope","profileService", "contactService", indexCtrl]);

    function indexCtrl($scope,profileService,contactService) {

        $scope.profileExists = function () {
            return (profileService.getProfile() != null);
        }

        $scope.contactExists = function () {
            return (contactService.getContact() != null);
        }

    }
}());