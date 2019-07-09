module.exports = {
    // '@tags': ['mobile', 'desktop'],
    'Challenge 3: Testing Layout'(browser) {
        const page = browser.page.challenge3();

        page
            .navigate()
            .nameShouldBeVisible()
            .emailShouldBeVisible()
            .passwordShouldBeVisible()
            .confirmPasswordShouldBeVisible()
            .countryShouldBeVisible()
            .languageShouldBeVisible()
            .agreeDivShouldBeVisible()
            .subscribeShouldBeVisible()
    }
}