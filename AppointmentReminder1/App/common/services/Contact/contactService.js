(function () {
    angular
            .module("common.services")
            .factory("contactService", contactService);

    function contactService() {

        var vm = this;
        
        //return {
        //    calcAdd: calcAdd,
        //    calcMultiply: calcMultiply
        //}

        //function calcAdd(num1, num2) {
        //    return num1 + num2;
        //}

        //function calcMultiply(num1, num2) {
        //    return num1 * num2;
        //}

        function setContacts(contacts)
        {
            vm.contacts = contacts
        }

        function getContacts() {
            return vm.contacts;
        }

    }

}());