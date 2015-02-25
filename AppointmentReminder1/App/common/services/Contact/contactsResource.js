(function () {
    angular
            .module("common.services")
            .factory("contactsResource", ["$resource", contactsResource]);

    function contactsResource($resource) {
        return $resource("/api/contacts/");
    }
}());