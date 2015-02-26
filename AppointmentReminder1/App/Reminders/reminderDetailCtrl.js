(function () {
    angular
        .module("appointmentReminderModule")
        .controller("reminderDetailCtrl", ["reminder", reminderDetailCtrl]);

    function reminderDetailCtrl(reminder) {
        var vm = this;
        vm.reminder = reminder;
        vm.title = "reminder Detail: " + vm.reminder.FirstName; 
    }
}());

