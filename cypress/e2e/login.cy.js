describe('login functionality', ()=>{
it('valid login details', ()=>{
    cy.visit("https://www.mandmdirect.com/")
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get(".myAccount_guest").click({force:true});
    cy.get('#EmailAddress').type('talk2kammy@gmail.com')
    cy.get('#Password').type('Bolaji92')
    cy.get('.btn').click()
    cy.get("div[id='leftNavigationContainer'] h2").should('have.text','My Account')

})
it('invalid login details', ()=>{
    cy.visit("https://www.mandmdirect.com/")
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get(".myAccount_guest").click({force:true});
    cy.get('#EmailAddress').type('talk@gmail.com')
    cy.get('#Password').type('Bolaji92')
    cy.get('.btn').click()
    cy.get("div[id='mainContentContainer'] li:nth-child(1)").should('have.text',"Oops! You've entered an incorrect email address or password. Please try again.")
})

})