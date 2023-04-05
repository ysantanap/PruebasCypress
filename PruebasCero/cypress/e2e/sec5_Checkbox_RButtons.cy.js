///<reference types="Cypress"/>

describe('Sección 5, Checkbox y RadioButtons', () => {
    it('Prueba 1, seleccionar todos los Checkbox', () => {
      cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      cy.title.should("eq","Prueba de campos Checkbox | TestingQaRvn")
      cy.wait(3000)
      cy.get("[type = 'checkbox']").check().should('be.checked')    //Chequea q todos los checkbox fueron clikeados
      cy.get("[type = 'checkbox']").uncheck().should('not.be.checked')     //No los chequea 
    })
  
    it('Prueba 2, Checkbox por seleccion ', () => {
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
        cy.title.should("eq","Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(3000)
        cy.get("#wsf-1-label-36-row-2").check.should('be.checked')        //con click puede funcionar
    })

    it('Prueba 3, RadioButtons ', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/')
        cy.title.should("eq","Radio Buttons | TestingQaRvn")
        cy.wait(3000)

        cy.get("#wsf-1-label-44-row-1").click
        
    })
  
    //Siempre para que no de Error_Reto1
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           }); 
    
  
  })