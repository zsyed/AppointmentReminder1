(function () {
    angular
        .module("appointmentReminderModule")
        .controller("contactEditCtrl", ["contact", "$state", "contactService", contactEditCtrl]);

    function contactEditCtrl(contact, $state, contactService) {
        var vm = this;
        vm.contact = contact;

        if (vm.contact && vm.contact.Id)
        {
            vm.title = "Edit: " + vm.contact.FirstName;
        }
        else {
            vm.title = "New contact";
        }

        vm.submit = function () {
            vm.contact.$save();
            toastr.success('Saved successfully. hoo hoo.');
            contactService.setContact(contact);
        }

        vm.cancel = function () {
            $state.go('contactList');
        }

    }


}());

