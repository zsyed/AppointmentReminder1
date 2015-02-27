(function () {
    angular
            .module("common.services")
            .factory("profileService", [profileService]);

    function profileService() {

        var vm = this;

        return {
            setProfile: setProfile,
            getProfile: getProfile
        }

        function setProfile(profile) {
            if (profile != null && profile.Id > 0)
            {
                vm.profile = profile;
            }
            
        }

        function getProfile() {
            if (vm.profile != null && vm.profile.Id > 0)
            {
                return vm.profile;
            }
        }
    }

}());