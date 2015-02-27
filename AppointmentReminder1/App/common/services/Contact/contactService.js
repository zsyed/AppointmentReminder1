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
            if (contact != null && contact.Id > 0)
            {
                vm.contact = contact;
            }
        }

        function getContact() {
            if (vm.contact != null && vm.contact.Id > 0)
            {
                return vm.contact;
            }
        }

    }

}());