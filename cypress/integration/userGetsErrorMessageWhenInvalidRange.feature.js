describe('User gets error message', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('when entering too low age', () => {
    cy.get('input#distance').type('1000')
    cy.get('#gender').click()
    cy.get('input#age').type('10')
    cy.get('p#cooper-message').should('contain',
      '10 y/o female running 1000 meters.'
    )
    cy.get('p#cooper-result').should('contain', 'Invalid age range.')
  })
  
  it('when entering too high age', () => {
    cy.get('input#distance').type('1000')
    cy.get('#gender').click()
    cy.get('input#age').type('130')
    cy.get('p#cooper-message').should('contain',
      '130 y/o female running 1000 meters.'
    )
    cy.get('p#cooper-result').should('contain', 'Invalid age range.')
  })
})