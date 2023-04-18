///<reference types="Cypress"/>

describe('Cypress_Pruebas Automatizadas Video01', () => {
    beforeEach(() => {
        cy.visit('https://testingqarvn.com.es/practicas-qa/')
      })

    it('Test 01. Visit to the page', () => {
      
      cy.title().should('eq','Prácticas QA | TestingQaRvn')
      cy.contains('Práctica con formularios Reales')            //Valida que ese texto este en la pag
      cy.wait(3000)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
    }); 
  
  })