module.exports = {
    'Challenge 3: password input field have a attribute type="password"'(browser) {
        const page = browser.page.challenge3();
        const sel = "@iPassword";
        const att = "type"

       page
            .navigate()
            .assert.attributeContains(sel, att, 'password')
            .clearValue("@iName")
    },
    
}