(function () {
    angular
        .module("appointmentReminderModule")
        .controller("contactEditCtrl", ["contact", "$state", contactEditCtrl]);

    function contactEditCtrl(contact, $state) {
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
        }

        vm.cancel = function () {
            $state.go('contactList');
        }

    }


}());

