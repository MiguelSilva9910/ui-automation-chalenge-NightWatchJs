const user = require('../users.js');

module.exports = {
    'Challenge 3: Fill the name field and click "Create User" should return a warning message'(browser){
        const page = browser.page.challenge3();

        page
            .navigate()
            .setValue('@iName', "adsasd")
            .onSubmit()
        browser
            .getAlertText((e) => {
                browser.assert.equal(e.value, 'The information in the form is not correct.')
            })
            .acceptAlert()
    },
}