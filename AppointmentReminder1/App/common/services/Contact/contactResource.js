(function () {
    angular
            .module("common.services")
            .factory("contactResource", ["$resource", contactResource]);

    function contactResource($resource) {
        return $resource("/api/contacts/:contactId");
    }
}());