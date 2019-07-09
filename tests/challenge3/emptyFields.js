const alertText = function(e){
    console.log(e.value);
    return e.value;
}

module.exports = {
    '@tags': ['desktop'],
    'Challenge 3: Click "Create User" button with all fields empty should return a warning message'(browser) {
        const page = browser.page.challenge3();
        
        page
            .navigate()
            .onSubmit()
            .userShouldBeCreated(browser);
    },
}