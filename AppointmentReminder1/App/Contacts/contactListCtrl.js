(function () {
    angular
        .module("appointmentReminderModule")
        .controller("contactListCtrl", ["contactsResource", "profileService", contactListCtrl]);

    function contactListCtrl(contactsResource, profileService) {
        var vm = this;

        contactsResource.query(function (data) {
            vm.contacts = data;

            vm.contacts.profile = profileService.getProfile();
        });
    }
}());