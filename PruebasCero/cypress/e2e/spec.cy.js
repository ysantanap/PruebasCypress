///<reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('probando la red', () => {
    cy.log('hola mundo')
  })

})