///<reference types="Cypress"/>
//para poder autocompletar con los comandos de cypress.

describe('Seccion 5, pruebas con cypress', () => {
  it('Validando el título de la pagina', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')              //'eq' ASSERT para comparar stricto DOS string

    cy.log("La funcion title esta OK")    
  })


})