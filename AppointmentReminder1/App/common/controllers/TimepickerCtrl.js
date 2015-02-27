//(function () {
//    angular
//        .module("appointmentReminderModule")
//        .controller("TimepickerCtrl", ["reminder", "$scope", TimepickerCtrl]);

//    function TimepickerCtrl(reminder, $scope) {
//        var vm = this;
//        $scope.mytime = new Date();

//        $scope.hstep = 1;
//        $scope.mstep = 15;

//        $scope.options = {
//            hstep: [1, 2, 3],
//            mstep: [1, 5, 10, 15, 25, 30]
//        };

//        $scope.ismeridian = true;
//        $scope.toggleMode = function () {
//            $scope.ismeridian = !$scope.ismeridian;
//        };

//        $scope.update = function () {
//            var d = new Date();
//            d.setHours(14);
//            d.setMinutes(0);
//            $scope.mytime = d;
//        };

//        $scope.changed = function () {
//            $log.log('Time changed to: ' + $scope.mytime);
//        };

//        $scope.clear = function () {
//            $scope.mytime = null;
//        };


//        //if (vm.reminder && vm.reminder.Id) {
//        //    vm.title = "Edit: " + vm.reminder.FirstName;
//        //}
//        //else {
//        //    vm.title = "New reminder";
//        //}

//        //vm.submit = function () {
//        //    vm.reminder.$save();
//        //    toastr.success('Saved successfully. hoo hoo.');
//        //}

//        //vm.cancel = function () {
//        //    $state.go('reminderList');
//        //}

//        //vm.open = function ($event) {
//        //    $event.preventDefault();
//        //    $event.stopPropagation();

//        //    vm.opened = !vm.opened;

//        //}
//    }
//}());

//angular.module('appointmentReminderModule').controller('TimepickerCtrl', function ($scope, $log) {
//    $scope.Time = new Date();

//    $scope.hstep = 1;
//    $scope.mstep = 15;

//    $scope.options = {
//        hstep: [1, 2, 3],
//        mstep: [1, 5, 10, 15, 25, 30]
//    };

//    $scope.ismeridian = true;
//    $scope.toggleMode = function () {
//        $scope.ismeridian = !$scope.ismeridian;
//    };

//    $scope.update = function () {
//        var d = new Date();
//        d.setHours(14);
//        d.setMinutes(0);
//        $scope.Time = d;
//    };

//    $scope.changed = function () {
//        $log.log('Time changed to: ' + $scope.Time);
//    };

//    $scope.clear = function () {
//        $scope.Time = null;
//    };
//});