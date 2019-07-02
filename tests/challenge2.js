module.exports = {
    'Challenge 2: Shoot all the bubbles that showed up after waiting 5 seconds'(browser) {
        const page = browser.page.challenge2();
        const bubbles = ".bulle";

        page
            .navigate()
            .pause(1000)
            .waitForElementVisible("@bubbles")
            .perform(function() {
                for(let i = 0; i < 5; i++){ 
                    this.click(bubbles);
                }
            })
            .pause(1000)
            .expect.element("@score").text.to.be.equal("5");
    }
};