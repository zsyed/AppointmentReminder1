(function () {
    var app = angular.module('appointmentReminderModule',
                                    ['common.services',
                                    'ui.router',
                                    'ui.mask',
                                    'ui.bootstrap',
                                    'remindersResourceMock',
                                    'profilesResourceMock',
                                    'contactsResourceMock']);

    app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
           .state("home", {
               url: "/",
               templateUrl: "App/welcomeView.html"
           })

        $stateProvider
           .state("contactList", {
               url: "/contacts",
               templateUrl: "App/Contacts/contactListView.html",
               controller: "contactListCtrl as vm"

           })
        $stateProvider
           .state("reminderList", {
               url: "/reminders",
               templateUrl: "App/Reminders/reminderListView.html",
               controller: "reminderListCtrl as vm"

           })
        $stateProvider
           .state("contactEdit", {
               url: "/contacts/edit/:contactId",
               templateUrl: "App/Contacts/contactEditView.html",
               controller: "contactEditCtrl as vm",
               resolve: {
                    contactResource: "contactResource",
                    contact: function (contactResource, $stateParams) {
                        var contactId = $stateParams.contactId;
                        return contactResource.get({ contactId: contactId }).$promise;
               }
        }
           })

        $stateProvider
           .state("profileEdit", {
               url: "/profiles/edit/:profileId",
               templateUrl: "App/Profile/profileEditView.html",
               controller: "profileEditCtrl as vm",
               resolve: {
                   profileResource: "profileResource",
                   profile: function (profileResource, $stateParams) {
                       var profileId = $stateParams.profileId;
                       return profileResource.get({ profileId: profileId }).$promise;
                   }
               }
           })

        $stateProvider
           .state("reminderEdit", {
               url: "/reminders/edit/:reminderId",
               templateUrl: "App/Reminders/reminderEditView.html",
               controller: "reminderEditCtrl as vm",
               resolve: {
                   reminderResource: "reminderResource",
                   reminder: function (reminderResource, $stateParams) {
                       var reminderId = $stateParams.reminderId;
                       return reminderResource.get({ reminderId: reminderId }).$promise;
                   }
               }
           })

        $stateProvider
           .state("profileDetail", {
               url: "/profiles/:profileId",
               templateUrl: "App/Profile/profileDetailView.html",
               controller: "profileDetailCtrl as vm",
               resolve: {
                    profileResource: "profileResource",
                    profile: function (profileResource, $stateParams) {
                        var profileId = $stateParams.profileId;
                        return profileResource.get({ profileId: profileId }).$promise;
               }
        }
           })

        $stateProvider
           .state("contactDetail", {
               url: "/contacts/:contactId",
               templateUrl: "App/Contacts/contactDetailView.html",
               controller: "contactDetailCtrl as vm",
               resolve: {
                   contactResource: "contactResource",
                   contact: function (contactResource, $stateParams) {
                       var contactId = $stateParams.contactId;
                       return contactResource.get({ contactId: contactId }).$promise;
                   }
               }
           })
    }]);
}());
