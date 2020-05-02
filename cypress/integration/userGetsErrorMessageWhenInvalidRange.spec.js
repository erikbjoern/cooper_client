describe('User gets error message', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('when entering invalid range', () => {
    cy.get('input#distance').type('100')
    cy.get('select#gender').select('female')
    cy.get('input#age').type('23')
    cy.get('p#cooper-message').should('contain',
      '23 y/o female running 100 meters.'
    )
    cy.get('p#cooper-result').should('contain', 'Invalid range of distance for this age and gender.')
  })
})