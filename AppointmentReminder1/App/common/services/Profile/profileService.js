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
            vm.profile = profile;
        }

        function getProfile() {
            return vm.profile;
        }

    }

}());