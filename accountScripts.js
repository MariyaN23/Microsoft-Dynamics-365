var accountScripts = window.Sdk || {};
(
    function () {
        this.mainPhoneOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const phone = formContext.getAttribute('telephone1').getValue()
            const regExp = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/
            if (!regExp.test(phone)) {
                formContext.getControl('telephone1').setNotification('Enter phone number in US format')
                formContext.ui.setFormNotification('Info message', 'INFO', 'formnoti1')
            } else {
                formContext.getControl('telephone1').clearNotification()
                formContext.ui.clearFormNotification('formnoti1')
            }
        }
        this.preventFormAutoSave = function (executionContext) {
            const eventArgs = executionContext.getEventArgs()
            if (eventArgs.getSaveMode() === 70) {
                eventArgs.preventDefault()
            }
        }
        this.formOnLoad = function (executionContext) {
            globalHelper.doSomething()

            const formContext = executionContext.getFormContext()
            const formType = formContext.ui.getFormType()
            if (formType === 1) {
                formContext.ui.setFormNotification('User is creating account', 'INFO', 'formType1')
            } else if (formType === 2) {
                formContext.ui.setFormNotification('User is opening existing account', 'INFO', 'formType2')
            } else if (formType === 3) {
                formContext.ui.setFormNotification(`User doesn't have permission to edit the record`, 'INFO', 'formType3')
            }
        }
    }
).call(accountScripts)