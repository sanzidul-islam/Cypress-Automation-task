class loginpageobjects{

    btnsignin="//div[@class='panel header']//a[contains(text(),'Sign In')]"
    txtemail="#email"
    txtpass="//fieldset[@class='fieldset login']//input[@id='pass']"
    btnsignin1="(//span[contains(text(),'Sign In')])[1]" 
    


    //Sign in buttom in landingpage
    signinbutton(){
        cy.xpath(this.btnsignin).click({force:true})
    }
    // Type mail
    signinmail(email){
        cy.get(this.txtemail).type(email)
    }
    // Type password
    signinpassword(password){
        cy.xpath(this.txtpass).type(password)
    }
    // Submit sign in button
    submitlogin(){
        cy.xpath(this.btnsignin1).click({force:true})
    }
    

}
export default loginpageobjects