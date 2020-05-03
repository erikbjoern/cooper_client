describe('Correct messages are displayed.', () => {
  describe('User not logged in', () => {

    beforeEach(() => {
      cy.visit('/')
    })
    it('should see correct calculation of cooper performance', () => {
      cy.get('input#distance').type('1000')
      cy.get('#gender').click()
      cy.get('input#age').type('23')
      cy.get('p#cooper-result').should('contain', 'Result: Poor')
    })
    
    it('should see a message with the input data', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('p#cooper-message').should('contain',
      '24 y/o female running 2000 meters.'
      )
    })
    
    it('should not see confirmation that any data was saved', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('p#response-message').should('not.exist')
    })
    
    it('should get a suggestion to log in, in order to save data', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('p#login-request').should('contain', 'Login to save your data')
    })
  })
    
  describe('logged-in user', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login.json",
        headers: {
          uid: "user@mail.com"
        }
      });
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/performance_data",
        response: {},
        headers: {
          uid: "user@mail.com"
        }
      });
      cy.visit('/')
      cy.get("#login").click();
      cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get('button').contains('Submit').click()
      });
    })

    it('should see correct calculation of cooper performance', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('#cooper-result').should('contain', 'Result: Average')
    })
    
    it('should see a message with the input data', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('#cooper-message').should('contain', 
      '24 y/o female running 2000 meters')
    })

    it('sees confirmation of entry saved', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('button#save-entry').click()
      cy.get('#response-message').should('contain', 'Your entry was saved')
    })
    
    it('does not get a suggestion to log in', () => {
      cy.get('input#distance').type('2000')
      cy.get('#gender').click()
      cy.get('input#age').type('24')
      cy.get('button#save-entry').click()
      cy.get('#login-request').should('not.exist')
    })
    
  })
})