//js for opening in the new tab
const pageInput = {
    pageType: "webresource",
    webresourceName: "test_congratulation"
}
const navigationOptions = {
    target: 2,
    width: 500, // value specified in pixel
    height: 400, // value specified in pixel
    position: 1
}
Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
    function success() {
        // Run code on success
    },
    function error() {
        // Handle errors
    }
)