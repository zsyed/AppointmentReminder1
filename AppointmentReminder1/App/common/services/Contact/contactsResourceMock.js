(function () {
    var app = angular
                    .module("contactsResourceMock",
                        ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        //var contacts = [
        //    { "Id": 1, "FirstName": "Zulfiqar", "LastName": "Syed", "PhoneNumber": "7145551212", "EmailAddress": "datfagdig@gmail.com", "TimeZone": "Pacific Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 2, "FirstName": "Faisal", "LastName": "Syed", "PhoneNumber": "714-555-1313", "EmailAddress": "faisal@gmail.com", "TimeZone": "Central Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 3, "FirstName": "Sobia", "LastName": "Syed", "PhoneNumber": "714-555-1414", "EmailAddress": "sobia@gmail.com", "TimeZone": "Mountain Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //];
        var contacts = [];
        var contactUrl = "/api/contacts"
        $httpBackend.whenGET(contactUrl).respond(contacts);

        var editingRegex = new RegExp(contactUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(
            function (method, url, data){
                var contact = { "contactId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];
                if (id > 0) {
                    for (var i=0; i< contacts.length; i++)
                    {
                        if (contacts[i].Id == id)
                        {
                            contact = contacts[i];
                            break;
                        }
                    }
                }
                return [200, contact, {}];
            });


        $httpBackend.whenPOST(contactUrl).respond(
            function (method, url, data) {
                var contact = angular.fromJson(data);

                if (contacts.length == 0)
                {
                    contact.Id = 1;
                    contacts.push(contact);
                }
                else if (!contact.Id || contacts.length > 0)
                {
                    contact.Id = contacts[contacts.length - 1].Id + 1;
                    contacts.push(contact);
                }
                else
                {
                    for (var i = 0; i < contacts.length; i++) {
                        if (contacts[i].Id == contact.Id) {
                            contacts[i] = contact;
                            break;
                        }
                    };
                }
                return [200, contact, {}];
            });

        $httpBackend.whenGET(/App/).passThrough();

    });

}());


