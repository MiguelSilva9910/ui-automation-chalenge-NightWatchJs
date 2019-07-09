const user = require('../users.js');

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill the name field and click "Create User" should return a warning message'(browser){
        const page = browser.page.challenge3();

        page
            .navigate()
            .fillName(user.onlyName)
            .onSubmit()
            .userShouldBeCreated(browser);
    },
}