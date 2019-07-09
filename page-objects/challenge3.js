const pageActions = {
    fillForm: function(user) {
        if(user.name){
            this.setValue('@iName', user.name)
        }
        if(user.email){
            this.setValue('@iEmail', user.email)
        }
        if(user.password){
            this.setValue('@iPassword', user.password)
        }
        if(user.confirmPassword){
            this.setValue('@iConfirmPassword', user.confirmPassword)
        }
        if(user.language === true){ 
            this.click('@dLanguage')
            this.waitForElementVisible('@sLanguage')
            this.click('@sLanguage')
        }
            this.pause(2000)
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