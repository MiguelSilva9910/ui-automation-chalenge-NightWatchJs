const user = require('../users');

module.exports = {
    'Challenge 3: Fill all fields with wrong email and should a alert warning'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillForm(user.userWithWrongEmail)
            .waitForElementPresent('@warningMessage')
            .waitForElementVisible('@warningMessage')
            .expect.element('@warningMessage').text.to.equal('Please use a valid email address')
    }
}