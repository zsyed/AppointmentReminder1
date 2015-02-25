(function () {
    angular
        .module("appointmentReminderModule")
        .controller("profileEditCtrl", ["profile", "$state", "profileService", profileEditCtrl]);

    function profileEditCtrl(profile, $state, profileService) {
        var vm = this;
        vm.profile = profile;

        if (vm.profile && vm.profile.Id) {
            vm.title = "Edit: " + vm.profile.FirstName;
        }
        else {
            vm.title = "New profile";
        }

        vm.submit = function () {
            vm.profile.$save();
            toastr.success('Saved successfully. hoo hoo.')
            profileService.setProfile(profile);
        }

        vm.cancel = function () {
            $state.go('profileList');
        }
    }
}());

