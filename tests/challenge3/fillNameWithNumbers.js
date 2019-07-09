const user = require('../users');

module.exports = {
    'Challenge 3: Fill field name with numbers and should alert message'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillForm(user.userWithNumbersWithName)
            .onSubmit()
        browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
    }
}