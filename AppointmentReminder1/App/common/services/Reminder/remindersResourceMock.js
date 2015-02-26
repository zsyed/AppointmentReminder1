(function () {
    var app = angular
                    .module("remindersResourceMock",
                        ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        //var reminders = [
        //    { "Id": 1, "FirstName": "Zulfiqar", "LastName": "Syed", "PhoneNumber": "7145551212", "EmailAddress": "datfagdig@gmail.com", "TimeZone": "Pacific Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 2, "FirstName": "Faisal", "LastName": "Syed", "PhoneNumber": "714-555-1313", "EmailAddress": "faisal@gmail.com", "TimeZone": "Central Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //    { "Id": 3, "FirstName": "Sobia", "LastName": "Syed", "PhoneNumber": "714-555-1414", "EmailAddress": "sobia@gmail.com", "TimeZone": "Mountain Standard Time", "imageUrl": "http://cdn.wegotthiscovered.com/wp-content/uploads/darkknight_3_dark-knight-rises1.jpg" },
        //];
        var reminders = [];
        var reminderUrl = "/api/reminders"
        $httpBackend.whenGET(reminderUrl).respond(reminders);

        var editingRegex = new RegExp(reminderUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(
            function (method, url, data){
                var reminder = { "reminderId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];
                if (id > 0) {
                    for (var i=0; i< reminders.length; i++)
                    {
                        if (reminders[i].Id == id)
                        {
                            reminder = reminders[i];
                            break;
                        }
                    }
                }
                return [200, reminder, {}];
            });


        $httpBackend.whenPOST(reminderUrl).respond(
            function (method, url, data) {
                var reminder = angular.fromJson(data);

                if (reminders.length == 0)
                {
                    reminder.Id = 1;
                    reminders.push(reminder);
                }
                //else if (!reminder.Id || reminders.length > 0)
                //{
                //    reminder.Id = reminders[reminders.length - 1].Id + 1;
                //    reminders.push(reminder);
                //}
                else
                {
                    var recordFound = false;

                    for (var i = 0; i < reminders.length; i++) {
                        if (reminders[i].Id == reminder.Id) {
                            reminders[i] = reminder;
                            recordFound = true;
                            break;
                        }
                    };

                    if (recordFound == false)
                    {
                        reminder.Id = reminders[reminders.length - 1].Id + 1;
                        reminders.push(reminder);
                    }
                }
                return [200, reminder, {}];
            });

        $httpBackend.whenGET(/App/).passThrough();

    });

}());


