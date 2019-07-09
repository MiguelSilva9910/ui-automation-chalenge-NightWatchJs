module.exports = {
    'Challenge 1.1: You must click on the People&Culture button in order to make the test pass'(browser){
        const page = browser.page.challenge1();
        
        page
            .navigate()
            .click("@menu")
            .waitForElementVisible("@peopleAndCulture")
            .click("@peopleAndCulture")
            .waitForElementVisible("@location")
            .expect.element("@location").text.to.equal("PORTO, PT")
            .pause(10000);
    }
}