(function () {
    var app = angular
                    .module("remindersResourceMock",
                        ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        var reminders = [
            { "Id": 1, "FirstName": "Zulfiqar", "Message": "Hello There ", "Date": "1/11/2014", "Time": "6:20 AM" },
            { "Id": 2, "FirstName": "Sobia", "Message": "Good morning", "Date": "2/12/2013", "Time": "7:22 AM" },
            { "Id": 3, "FirstName": "Faisal", "Message": "Good night", "Date": "3/13/2011", "Time": "8:30 PM" },
        ];
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


