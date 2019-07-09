const user = require('../users.js'); 

module.exports = {
    'Challenge 3: Fill all fields with different passwords should alert message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithDifferentPasswords)
            .onSubmit()
        browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
    }
}