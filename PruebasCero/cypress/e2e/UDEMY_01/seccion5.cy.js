///<reference types="Cypress"/>
//para poder autocompletar con los comandos de cypress.

describe('Seccion 5, pruebas con cypress', () => {
  it('Validando el título de la pagina', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq','DEMOQA')              //'eq' ASSERT para comparar stricto DOS string
    cy.log("La funcion title esta OK")    
  })

  it('Funcion type --enter', () => {           //Abrir google, escribir la busqueda y dar enter para comenzar
    cy.visit('https://www.google.pl/')
    cy.get("[name = 'q']").type('cypress{enter}')
    cy.wait(3000)
    cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()    
  })
  it('Funcion tye --pageUp --pageDown', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get("#username").type('{pageup}')       //Subir y bajar la page.
    cy.wait(2000)
    cy.get("#username").type('{pagedown}')
       
  })

})