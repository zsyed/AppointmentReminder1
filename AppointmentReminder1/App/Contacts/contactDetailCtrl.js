(function () {
    angular
        .module("appointmentReminderModule")
        .controller("contactDetailCtrl", ["contact", "contactService", contactDetailCtrl]);

    function contactDetailCtrl(contact, contactService) {
        var vm = this;
        vm.contact = contact;
        vm.title = "Contact Detail: " + vm.contact.FirstName + " " + contactService.calcAdd(3,2);
    }
}());

