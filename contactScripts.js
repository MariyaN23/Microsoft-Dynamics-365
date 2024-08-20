var contactsScript = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const lookupArr = formContext.getAttribute('parentcustomerid').getValue()
            if (lookupArr[0] !== null) {
                const guidOfAccount = lookupArr[0].id
                const nameOfAccount = lookupArr[0].name
                const entityTypeOfAccount = lookupArr[0].entityType
                formContext.ui.setFormNotification(`GUID of the account is ${guidOfAccount}`, 'INFO', '1')
                formContext.ui.setFormNotification(`Name of the account is ${nameOfAccount}`, 'INFO', '2')
                formContext.ui.setFormNotification(`Entity type of the account is ${entityTypeOfAccount}`, 'INFO', '3')
            }
        }
        this.firstNameOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const firstName = formContext.getAttribute('firstname').getValue()
            alert(`Hello ${firstName}`)
        }
        this.shippingDetailsOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            if (formContext.getAttribute('address1_shippingmethodcode').getText() === 'FedEx') {
                formContext.getControl('address1_freighttermscode').setDisabled(true)
            } else {
                formContext.getControl('address1_freighttermscode').setDisabled(false)
            }
        }
    }
).call(contactsScript)