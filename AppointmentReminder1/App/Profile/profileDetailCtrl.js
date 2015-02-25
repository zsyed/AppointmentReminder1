(function () {
    angular
        .module("appointmentReminderModule")
        .controller("profileDetailCtrl", ["profileResource", "profile", profileDetailCtrl]);

    function profileDetailCtrl(profileResource, profile) {
        var vm = this;
        vm.profile = profile;
    }
}());



