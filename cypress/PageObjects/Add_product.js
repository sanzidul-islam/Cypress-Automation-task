class productpageobjects{

    btnitem="(//a[@title='Breathe-Easy Tank'][normalize-space()='Breathe-Easy Tank'])[1]"
    btnaddtocard="//button[@id='product-addtocart-button']"
    btnsize="(//div[@id='option-label-size-143-item-167'])[1]"
    btncolor="//div[@id='option-label-color-93-item-57']"
    btncard="//a[@class='action showcart']"
    txtitem="//a[normalize-space()='Breathe-Easy Tank']"

    // Click item 
    clickitem(){
        cy.xpath(this.btnitem).click({force:true})
    }
    //Select item size
    selectsize(){
        cy.xpath(this.btnsize).click({force:true})
    }
    //Select item color
    selectcolor(){
        cy.xpath(this.btncolor).click({force:true})
    }
    //Click Add to card button
    addtocardbutton(){
        cy.xpath(this.btnaddtocard).click({force:true})
    }
    // Open card
    opencard(){
        cy.xpath(this.btncard).click({force:true})
    }
    // Match card item that i added
    carditem(){
        cy.xpath(this.txtitem).should('have.text', 'Breathe-Easy Tank').then(() => {
            cy.log('Added successfully!');
        });
    }

}
export default productpageobjects