const user = require('../users.js'); 

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill all fields and click "Create User" without agree terms should a alert message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithoutAgree)
            .onSubmit()
            .pause(1000)
            .userShouldBeCreated(browser);
    }
}