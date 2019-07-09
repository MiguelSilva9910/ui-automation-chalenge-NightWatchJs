const user = require('../users');

module.exports = {
    'Challenge 3: Fill field email with wrong email and should alert message'(browser){
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .fillForm(user.userWithoutAgree)
            .onSubmit()
        browser 
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
    }
}