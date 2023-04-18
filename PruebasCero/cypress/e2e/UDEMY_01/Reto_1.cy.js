///<reference types="Cypress"/>

describe('Reto #1 en Seccion 5', () => {
    it('Acceder al sitio de prueba DEMOQA', () => {            
      cy.visit("https://demoqa.com/webtables")           //Acceder
      cy.title().should('eq','DEMOQA')                   //Validar el titulo
      cy.wait(3000) 

      cy.get("#searchBox").should("be.visible").type('Alden')     //Cuadro de texto visible y escribir Alden
      cy.wait(3000)
      cy.clear

      cy.get("#addNewRecordButton").should("be.visible").click   //Click en ADD para adicionar un nuevo elemento
      cy.wait(3000)

      //Agregando datos en el formulario         (hacerlo con la funcion TAB)
      cy.get("#firstName").should('be.visible').type("Yudisel")
      cy.get("#lastName").should('be.visible').type("Santana") 
      cy.get("#userEmail").should('be.visible').type("yudisel@gmail.com")
      cy.get("#age").should('be.visible').type(36)
      cy.get("#salary").should('be.visible').type(900)      
      cy.get("#department").should('be.visible').type("Ing.Informatica")  
      cy.get("#submit").should('be.visible').click
      cy.wait(4000)

      cy.get("#searchBox").should("be.visible").type('Yudisel')     //Cuadro de texto visible y escribir Alden
      cy.wait(3000)
      cy.clear

      //Editar campos
      cy.get("#edit-record-1").should("be.visible").click
      cy.wait(2000)
      cy.get("#firstName").clear.type("Adriel")
      cy.get("#submit").click

      //Eliminar es lo mismo

      //Siempre para que no de Error_Reto1
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       }); 

    })
    
  })