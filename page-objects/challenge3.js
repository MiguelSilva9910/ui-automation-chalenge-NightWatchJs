const pageActions = {
    fillForm: function(user) {
        if(user.name){
            this.setValue('@iName', user.name)
            this.setValue('@iEmail', user.email)
            this.setValue('@iPassword', user.password)
            this.setValue('@iConfirmPassword', user.confirmPassword)
            this.click('@dCountry')
            this.waitForElementVisible('@sCountry')
            this.click('@sCountry')
            this.click('@dLanguage')
            this.waitForElementVisible('@sLanguage')
            this.click('@sLanguage')
            this.pause(2000)
            return this;
        }else{
            this.setValue('@iEmail', user.email)
            this.setValue('@iPassword', user.password)
            this.setValue('@iConfirmPassword', user.confirmPassword)
            this.click('@dCountry')
            this.waitForElementVisible('@sCountry')
            this.click('@sCountry')
            this.click('@dLanguage')
            this.waitForElementVisible('@sLanguage')
            this.click('@sLanguage')
            this.pause(2000)
            return this;
        }
    },
    fillFormWithoutLanguage: function(user) {
        this.setValue('@iName', user.name)
        this.setValue('@iEmail', user.email)
        this.setValue('@iPassword', user.password)
        this.setValue('@iConfirmPassword', user.confirmPassword)
        this.click('@dCountry')
        this.waitForElementVisible('@sCountry')
        this.click('@sCountry')
        return this;
    },
    onSubmit: function() {
        this.click('@btnSubmit')
    }
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
    },
    commands: [pageActions]
}