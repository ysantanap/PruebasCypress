///<reference types="Cypress"/>

describe('Seccion 11, Funcion select', () => {
  it('Select 1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
    cy.title.should("eq","OrangeHRM")
    cy.wait(3000)

    cy.get("div[class='oxd-select-text oxd-select-text--focus'] div[class='oxd-select-text-input']").should('be.visible').select("Chief Executive Officer")

  })

  it('probando la red', () => {
    cy.log('hola mundo')
  })

        //Siempre para que no de Error_Reto1
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
         }); 

})