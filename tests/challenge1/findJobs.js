module.exports = {
    'Challenge 1.3: You must define the selector in order to make the test pass'(browser) {
        const page = browser.page.challenge1();
        page
            .navigate()
            .pause(500)
            .moveToElement('@jobs', 1000,1000)
            .pause(5000)
            .expect.element("@jobs").text.to.equal("TEST AUTOMATION ENGINEER (M/F)")
    }
}