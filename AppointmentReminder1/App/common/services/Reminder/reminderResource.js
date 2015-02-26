(function () {
    angular
            .module("common.services")
            .factory("reminderResource", ["$resource", reminderResource]);

    function reminderResource($resource) {
        return $resource("/api/reminders/:reminderId");
    }
}());