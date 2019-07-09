const user = require('../users.js'); 

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill all fields withou language should a alert message'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillForm(user.userWithoutLanguage)
            .onSubmit()
            .pause(1000)
            .userShouldBeCreated(browser);
    }
};