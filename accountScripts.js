const accountScripts = window.Sdk || {};
(
    function () {
        this.mainPhoneOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const phone = formContext.getAttribute('telephone1').getValue()
            const regExp = new RegExp('((\(\d{3}\) ?)|(\\d{3}-))?\d{3}-\d{4}')
            if (!regExp.test(phone)) {
                alert('Enter phone number in US format')
            }
        }
    }
).call(accountScripts)