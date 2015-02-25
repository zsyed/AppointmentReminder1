(function () {
    angular
            .module("common.services")
            .factory("profileResource", ["$resource", profileResource]);

    function profileResource($resource) {
        return $resource("/api/profiles/:profileId");
    }
}());