import loginpageobjects from "../PageObjects/Login"
import productpageobjects from "../PageObjects/Add_product"
describe('Task',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

        
        Cypress._.times(1, () => {

            it('Task Action', () => {
                cy.visit('https://magento.softwaretestingboard.com/')
    
                cy.fixture('data').then((data)=> {

                    const lb = new loginpageobjects
                    const ld = new productpageobjects
                    lb.signinbutton()
                    lb.signinmail(data.email)
                    lb.signinpassword(data.password)
                    lb.submitlogin()
                    cy.wait(2000)
                    cy.scrollTo(0, 1800)
                    ld.clickitem()
                    cy.scrollTo(0, 500)
                    cy.wait(2000)
                    ld.selectsize()
                    ld.selectcolor()
                    ld.addtocardbutton()
                    cy.wait(2000)
                    ld.opencard()
                    ld.carditem()
                
                    
                })
            })
    
        })

})