(function () {
    angular
            .module("common.services")
            .factory("contactService", [contactService]);

    function contactService() {

        var vm = this;

        return {
            setContact: setContact,
            getContact: getContact
        }

        function setContact(contact) {
            vm.contact = contact;
        }

        function getContact() {
            return vm.contact;
        }

    }

}());