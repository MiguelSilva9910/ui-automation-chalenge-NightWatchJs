const user = require('../users.js'); 

module.exports = {
    'Challenge 3: Fill all fields withou language should a alert message'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillFormWithoutLanguage(user.userWithoutAgree)
            .onSubmit()
        browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
    }
};