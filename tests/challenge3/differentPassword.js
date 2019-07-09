const user = require('../users.js'); 

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill all fields with different passwords should alert message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithDifferentPasswords)
            .onSubmit()
            .userShouldBeCreated(browser);
    }
}