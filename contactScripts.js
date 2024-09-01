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
        //task 1
        this.birthDateOnChange = function (executionContext) {
            const formContext = executionContext.getFormContext()
            const birthdate = formContext.getAttribute('birthdate').getValue()

            const date = new Date(birthdate)
            const todaysDate = new Date()
            const minDate = new Date('1990-01-01')

            if (date > todaysDate) {
                formContext.getControl('birthdate').setNotification('Date should not be in the future')
            } else if (date < minDate) {
                formContext.getControl('birthdate').setNotification('Date should be more than 01.01.1990')
            } else {
                formContext.getControl('birthdate').clearNotification()
            }

            var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } }

            const contactBirthday = new Date(birthdate)
            const compareDate = new Date()
            if (contactBirthday.getDate() === compareDate.getDate() && contactBirthday.getMonth() === compareDate.getMonth()) {
                const myEmail = formContext.getAttribute('emailaddress1').getValue()
                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "sellaite505@gmail.com",
                    Password : "780A6E10DC3187E084E5BAFDCB85B66F2AAF",
                    To : myEmail,
                    From : "sellaite505@gmail.com",
                    Subject : "Happy Birthday!",
                    Body : "Happy birthday! I hope all your birthday wishes and dreams come true."
                }).then(
                    message => alert(message)
                )
            }
        }
    }
).call(contactsScript)