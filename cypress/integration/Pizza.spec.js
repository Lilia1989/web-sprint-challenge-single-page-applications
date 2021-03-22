describe('Test App',()=>{
    //schedule something to happen before each test
    //before each test we navigate to http://localhost:3000
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    })
    const nameinput = () => cy.get('input[name="name"]')
    const specialInstructions = () => cy.get('input[name="spectialInstructions"]')
    const Toppings = () => cy.get('input[type="checkbox"]').check()
    const submitBtn = () => cy.get('button[id="submitBtn"]')
    //use the 'it' keyword for tests
    it(' the proper elements exist',()=>{
   nameinput().should('exist')
   specialInstructions().should('exist')
   submitBtn().should('exist')
    })
    describe('filling out inputs and cancelling',() =>{
      it('submitbtn is disabled',() => {
        submitBtn().should('be.disabled')
      })
      it('it can type inside the input',() => {
        nameinput()
        .should('have.value','')
        .type('Yonathan')
        .should('have.value','Yonathan')
        specialInstructions()
        .should('have.value','')
        .type('admyoni4@yahoo.com')
        .should('have.value','admyoni4@yahoo.com')
      })
      it('it can check on termsOfService',() => {
        Toppings()
        .should('have.checked','')
      })
      describe('the submit btn enables when all inputs filled and Agreed on terms', () => {
          it('it can submit and delete', () =>{
            cy.contains(/yon.O@gmail.com/).should('not.exist')
            nameinput().type('yon')
            emailInput().type('yon.O@gmail.com')
            passwordInput().type('1234Lily')
            termsOfservice().check('Agree')
            //cy.get('[disabled]').click({force: true})
            //submitBtn().should('not.be.disabled')
            submitBtn().click()
            cy.contains(/yon.O@gmail.com/).should('exist')
            //submitBtn().should('be.disabled')
      })
    })
    })
  })
  