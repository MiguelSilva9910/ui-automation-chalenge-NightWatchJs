module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: password input field have a attribute type="password"'(browser) {
        const page = browser.page.challenge3();
        const sel = "@iPassword";
        const att = "type"

       page
            .navigate()
            .assert.attributeEquals(sel, att, 'password')
            .clearValue("@iName")
    },
    
}