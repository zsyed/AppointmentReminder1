(function () {
    angular
        .module("appointmentReminderModule")
        .controller("profileDetailCtrl", ["profileResource", "profile", "profileService", profileDetailCtrl]);

    function profileDetailCtrl(profileResource, profile, profileService) {
        var vm = this;
        vm.profile = profile;
        profileService.setProfile(profile);
    }
}());



