(function () {
    angular
            .module("common.services")
            .factory("remindersResource", ["$resource", remindersResource]);

    function remindersResource($resource) {
        return $resource("/api/reminders/");
    }
}());