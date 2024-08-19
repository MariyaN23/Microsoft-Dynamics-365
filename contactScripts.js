function contactLoad() {
    alert('This is OnLoad event on form')
}

function contactSave() {
    alert('This is OnSave event on form')
}

function emailOnChange() {
    alert('This is OnChange event of email attribute')
}

function displayHello(executionContext) {
    const formContext = executionContext.getFormContext()
    const firstName = formContext.getAttribute('firstname').getValue()
    alert(`Hello ${firstName}`)
}

//namespace notation

//doesn't work when adding more than 1 method (firstNameOnChange)
const Sdk = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const firstName = formContext.getAttribute('firstname').getValue()
            alert(`Hello ${firstName}`)
        }
        this.firstNameOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const firstName = formContext.getAttribute('firstname').getValue()
            alert(`Hello ${firstName}`)
        }
    }
).call(Sdk)

//working
window.formOnLoad = function (executionContext) {
    const formContext = executionContext.getFormContext()
    const firstName = formContext.getAttribute('firstname').getValue()
    alert(`Hello ${firstName}`)
}

window.firstNameOnChange = function (executionContext) {
    const formContext = executionContext.getFormContext()
    const firstName = formContext.getAttribute('firstname').getValue()
    alert(`Hello ${firstName}`)
}

//working
const contactsScript = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const firstName = formContext.getAttribute('firstname').getValue()
            alert(`Hello ${firstName}`)
        }
        this.firstNameOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const firstName = formContext.getAttribute('firstname').getValue()
            alert(`Hello ${firstName}`)
        }
    }
).call(contactsScript)