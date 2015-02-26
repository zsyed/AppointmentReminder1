(function () {
    angular
        .module("appointmentReminderModule")
        .controller("reminderEditCtrl", ["reminder", "$state", reminderEditCtrl]);

    function reminderEditCtrl(reminder, $state) {
        var vm = this;
        vm.reminder = reminder;

        if (vm.reminder && vm.reminder.Id)
        {
            vm.title = "Edit: " + vm.reminder.FirstName;
        }
        else {
            vm.title = "New reminder";
        }

        vm.submit = function () {
            vm.reminder.$save();
            toastr.success('Saved successfully. hoo hoo.');
        }

        vm.cancel = function () {
            $state.go('reminderList');
        }
    }
}());

