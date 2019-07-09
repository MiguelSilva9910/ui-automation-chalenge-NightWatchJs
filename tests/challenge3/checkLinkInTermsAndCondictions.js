const user = require('../users');

module.exports = {
    'Challenge 3: Check the field hava any attribute to link'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillForm(user.userWithoutAgree)
            .onSubmit()
        browser
            .assert.attributeContains('@terms', 'href', 'terms&condictions.com')
            .acceptAlert()
    }
}