(function () {
    angular
        .module("appointmentReminderModule")
        .controller("reminderListCtrl", ["remindersResource", "contactService", reminderListCtrl]);

    function reminderListCtrl(remindersResource, contactService) {
        var vm = this;

        remindersResource.query(function (data) {
            vm.reminders = data;

            vm.reminders.contact = contactService.getContact();
        });
    }
}());