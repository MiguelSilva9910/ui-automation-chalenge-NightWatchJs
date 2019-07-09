const user = require('../users');

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Fill field email with wrong email and should alert message'(browser){
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithoutAgree)
            .onSubmit()
            .userShouldBeCreated(browser)
    }
}