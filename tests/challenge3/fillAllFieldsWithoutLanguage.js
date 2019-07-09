const user = require('../users.js'); 

module.exports = {
    'Challenge 3: Fill all fields withou language should a alert message'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillForm(user.userWithoutLanguage)
            .onSubmit()
        browser
            .pause(1000)
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
            .pause(5000)
    }
};