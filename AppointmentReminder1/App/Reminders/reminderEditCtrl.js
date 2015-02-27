(function () {
    angular
        .module("appointmentReminderModule")
        .controller("reminderEditCtrl", ["reminder", "$state", "$scope", "$filter", reminderEditCtrl]);

    function reminderEditCtrl(reminder, $state, $scope, $filter) {
        var vm = this;
        vm.reminder = reminder;

        if (vm.reminder && vm.reminder.Id)
        {
            vm.title = "Edit: " + vm.reminder.FirstName;
        }
        else {
            vm.title = "New reminder";
            vm.reminder.Date = $filter('date')(new Date(), 'MM/dd/yyyy');
            vm.reminder.Time = new Date();
        }

        vm.submit = function () {
            vm.reminder.$save();
            toastr.success('Saved successfully. hoo hoo.');
        }

        vm.cancel = function () {
            $state.go('reminderList');
        }

        vm.open = function($event)
        {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;

        }

        //Time relate code starts here
        // vm.reminder.Time = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function () {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function () {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            vm.reminder.Time = d;
        };

        $scope.changed = function () {
            $log.log('Time changed to: ' + vm.reminder.Time);
        };

        $scope.clear = function () {
            vm.reminder.Time = null;
        };
        //Time relate code ends here

    }
}());

