const user = require('../users');

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill field name with numbers and should alert message'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillName(user.userWithNumbersWithName)
            .onSubmit()
            .pause(1000)
            .userShouldBeCreated(browser)
    }
}