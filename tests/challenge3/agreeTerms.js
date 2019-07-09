const user = require('../users.js'); 

module.exports = {
    'Challenge 3: Fill all fields and click "Create User" without agree terms should a alert message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithoutAgree)
            .onSubmit()
        browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, "You need to accept the terms and condictions")
            })
            .acceptAlert()
            .pause(5000)
    }
}