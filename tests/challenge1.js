module.exports = {
    'Challenge 1.1: You must click on the People&Culture button in order to make the test pass'(browser){
        const page = browser.page.challenge1();
        
        page
            .navigate()
            .waitForElementVisible("@menu")
            .click("@menu")
            .waitForElementVisible("@peopleAndCulture")
            .click("@peopleAndCulture")
            .pause(10000);
    },
    'Challenge 1.2: You must change the expect assertion in order to make the test pass'(browser){
        const page = browser.page.challenge1();
        // const locals = "[data-reactid='100']";
        // const location = "#contacts > div > div.footer-contacts > div:nth-child(1) > div:nth-child(2) > div.footer-contact-city";   
        page
            .navigate()
            .waitForElementVisible("@locals")
            .click('@locals')
            .expect.element("@location").text.to.equal("PORTO, PT");
    },
    'Challenge 1.3: You must define the selector in order to make the test pass'(browser) {
        const page = browser.page.challenge1();
        page
            .navigate()
            .waitForElementVisible("@jobs")
            .expect.element("@jobs").text.to.equal("TEST AUTOMATION ENGINEER (M/F)");

    }
}