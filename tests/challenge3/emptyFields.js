const alertText = function(e){
    console.log(e.value);
    return e.value;
}

module.exports = {
    'Challenge 3: Click "Create User" button with all fields empty should return a warning message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .onSubmit()

       browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, "The information in the form is not correct.")
            })
            .acceptAlert()

        page
            .pause(3000)
    },
}