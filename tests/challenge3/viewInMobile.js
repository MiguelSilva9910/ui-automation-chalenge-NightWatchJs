module.exports = {
    'Challenge 3: Check if user can see in mobile'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .expect.element('@iName').to.be.visible;
    }
}