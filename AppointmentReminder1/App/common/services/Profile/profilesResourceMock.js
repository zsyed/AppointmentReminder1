(function () {
    var app = angular
                    .module("profilesResourceMock",
                        ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        //var profiles = [
        //    { "Id": 1, "FirstName": "ZulfiqarP", "LastName": "Syed", "PhoneNumber": "7145551212", "EmailAddress": "datfagdig@gmail.com", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 2, "FirstName": "FaisalP", "LastName": "Syed", "PhoneNumber": "714-555-1313", "EmailAddress": "faisal@gmail.com", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 3, "FirstName": "SobiaP", "LastName": "Syed", "PhoneNumber": "714-555-1414", "EmailAddress": "sobia@gmail.com", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //];

        var profiles = [];
        var profileUrl = "/api/profiles"
        $httpBackend.whenGET(profileUrl).respond(profiles);

        var editingRegex = new RegExp(profileUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(
            function (method, url, data){
                var profile = { "profileId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];
                if (id > 0) {
                    for (var i=0; i< profiles.length; i++)
                    {
                        if (profiles[i].Id == id)
                        {
                            profile = profiles[i];
                            break;
                        }
                    }
                }
                return [200, profile, {}];
            });


        $httpBackend.whenPOST(profileUrl).respond(
            function (method, url, data) {
                var profile = angular.fromJson(data);

                if (!profile.Id || profile.Id == 0)
                {
                    if (profiles.length > 0) {
                        profile.Id = profiles[profiles.length - 1].Id + 1;
                    }
                    else {
                        profile.Id = 1;
                    }
                    profiles.push(profile);
                }
                else
                {
                    for (var i = 0; i < profiles.length; i++) {
                        if (profiles[i].Id == profile.Id) {
                            profiles[i] = profile;
                            break;
                        }
                    };
                }
                return [200, profile, {}];
            });

        $httpBackend.whenGET(/App/).passThrough();

    });

}());


