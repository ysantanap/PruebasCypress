///<reference types="Cypress"/>
import 'cypress-file-upload'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('probando la red', () => {
    cy.log('hola mundo')
  })

        //Siempre para que no de Error_Reto1
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
         }); 

})