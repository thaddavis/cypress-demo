describe('smoke tests', () => {
  it('visit website', () => {
    cy.visit('https://kalygo.io')
    cy.wait(3000)
  })

  it('says `Kalygo` in Hero Section', () => {
    cy.get('.fw-bolder.text-secondary.display-1').should('have.text', 'KALYGO')
  })

  it('says `Less hassle, more time for you.` in section', () => {
    cy.get('#getting-started').scrollIntoView()
    cy.wait(1000)
  })

  it('click CTA button', () => {
    cy.get('#home').scrollIntoView()
    cy.get('.text-dark.me-3.btn.btn-secondary').click()
  })

  it('dashboard should say Network Status', () => {
    cy.wait(3000)
    cy.get('h1').should('have.text', 'Network Status')
    cy.screenshot()
  })
})