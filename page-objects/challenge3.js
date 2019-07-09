const pageActions = {
    fillForm: function(user) {
        this.fillName(user);
        this.fillEmail(user);
        this.fillPassword(user);
        this.fillConfirmPassword(user);
        this.fillLanguage(user)   
        this.pause(2000)
        return this;
    },
    onSubmit: function() {
        this.click('@btnSubmit')
        return this;
    },
    fillName: function(user){
        if(user.name){
            this.setValue('@iName', user.name)
        }
        return this;
    },
    fillPassword: function(user){
        if(user.password){
            this.setValue('@iPassword', user.password)
        }
        return this;
    },
    fillConfirmPassword: function(user){
        if(user.confirmPassword){
            this.setValue('@iConfirmPassword', user.confirmPassword)
        }
        return this;
    },
    fillLanguage: function(user){
        if(user.language){ 
            this.click('@dLanguage')
            this.waitForElementVisible('@sLanguage')
            this.click('@sLanguage')
        }
        return this;
    },
    fillEmail: function(user){
        if(user.email){
            this.setValue('@iEmail', user.email)
        }
        return this;
    },
    userShouldBeCreated: function(browser) {
        browser.getAlertText((e) => {
            browser.assert.equal(e.value, 'The information in the form is not correct.')
        })
        .acceptAlert()
        return this;
    },
    nameShouldBeVisible: function(){
        this.expect.element('@nameLabel').to.be.visible
        this.expect.element('@iName').to.be.visible
        this.expect.element('@nameLabel').text.to.be.equal('Name')
        return this;
    },
    emailShouldBeVisible: function(){
        this.expect.element('@emailLabel').to.be.visible
        this.expect.element('@iEmail').to.be.visible
        this.expect.element('@emailLabel').text.to.be.equal('Email')
        return this;
    },
    passwordShouldBeVisible: function(){
        this.expect.element('@passwordLabel').to.be.visible
        this.expect.element('@iPassword').to.be.visible
        this.expect.element('@passwordLabel').text.to.be.equal('Password')
        return this;
    },
    confirmPasswordShouldBeVisible: function(){
        this.expect.element('@confirmPasswordLabel').to.be.visible
        this.expect.element('@iConfirmPassword').to.be.visible
        this.expect.element('@confirmPasswordLabel').text.to.be.equal('Confirm Password')
        return this;
    },
    countryShouldBeVisible: function(){
        this.expect.element('@countryLabel').to.be.visible
        this.expect.element('@dCountry').to.be.visible
        this.expect.element('@countryLabel').text.to.be.equal('Country')
        return this;
    },
    languageShouldBeVisible: function(){
        this.expect.element('@languageLabel').to.be.visible
        this.expect.element('@dLanguage').to.be.visible
        this.expect.element('@languageLabel').text.to.be.equal('Preferred language')
        return this;
    },
    agreeDivShouldBeVisible: function(){
        this.expect.element('@textTermsDiv').to.be.visible
        this.expect.element('@terms').to.be.visible
        this.expect.element('@textTermsDiv').text.to.be.equal('I agree with the terms and conditions')
        return this;
    },
    subscribeShouldBeVisible: function(){
        this.expect.element('@subscribetext').to.be.visible
        this.expect.element('@subscribeCheckbox').to.be.visible
        this.expect.element('@subscribetext').text.to.be.equal('Subscribe to our newsletter')
        return this;
    },
 }

module.exports = {
    url: "https://qatools.mindera.com/buggy.html#/",
    elements: {
        btnSubmit: "form > div:nth-child(9) > div > button",
        iName: "#name",
        iEmail: "#email",
        iPassword: "#password",
        iConfirmPassword: "form > div:nth-child(4) > div > input",
        dCountry: "select[name='profession']",
        sCountry: "option[value='ASM']",
        dLanguage: "#language",
        sLanguage: "option[value='ms_MY']",
        terms: "#terms",
        warningMessage: "form > div:nth-child(2) > div > div",
        nameLabel: "form > div:nth-child(1) > label",
        emailLabel: "form > div:nth-child(2) > label",
        passwordLabel: "form > div:nth-child(3) > label",
        confirmPasswordLabel: "form > div:nth-child(4) > label",
        countryLabel: "form > div:nth-child(5) > label",
        languageLabel: "form > div:nth-child(6) > label",
        textTermsDiv: "form > div:nth-child(7) > div",
        newsletterDiv: "form > div:nth-child(8) > div",
        subscribeCheckbox: "#newsletter",
        subscribetext: "form > div:nth-child(8) > div"
    },
    commands: [pageActions]
}