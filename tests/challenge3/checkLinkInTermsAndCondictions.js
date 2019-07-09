const user = require('../users');

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Check the field hava any attribute to link'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
        browser
            .pause(1000)
            .acceptAlert()
            .assert.attributeContains('@terms', 'href', 'terms&condictions.com')
    }
}