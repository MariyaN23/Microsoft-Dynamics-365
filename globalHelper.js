var globalHelper = window.Sdk || {};
(
    function () {
        this.doSomething = function (executionContext) {
            alert('This is global helper!')
        }
    }
).call(globalHelper)