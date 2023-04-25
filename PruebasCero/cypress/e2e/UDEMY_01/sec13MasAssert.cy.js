///<reference types="Cypress"/>

describe('Continuacion seccion 13', () => {
    /*it('Asserts have.contain', () => {     //ejemplo sin url Valida
      cy.get('#name').should('have.text', 'adriel')   //Si en ese selector esta esscrito el texto adriel 
      cy.get('#name').should('contain.text', 'adriel')
    })*/
    it('Assert mas then, value', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should('eq','DEMOQA')
      cy.wait(10000)

      cy.get('#userName').should('be.visible').type('adriel')
      //contain.value  --se ese valor esta en ese selector, puede ser una parte porque puede ser adriellll y pasa
      //have.value     --valor exacto
      cy.get('#userName').should('contain.value', 'adriel').then(()=>{      //si este valor se cumple entonces
            cy.get('#userEmail').should('be.visible').type('adriel@gmail.com')
            cy.get('#submit').should('be.enabled').click()
            //cy.contains('[type="button"]','submit').should('be.visible').click({force:true})
      })
    })

    it.only('Assert url, inclued', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(5000)

        cy.url().should('include','text-box')

        })
      })
  
    it('Assert have.class y and', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(5000)

        cy.get('#userName').should('be.visible').should('have.class', 'mr-sm-2 form-control')
        //cy.get('#userName').should('be.visible').and('have.class', 'mr-sm-2 form-control')
        //con and la funcion then se cumple si los dos assert son true
            .then(() => {
                cy.get('#userName').type('adriel')
            })
  
        })
      
      /*it.only('Assert length css, tablas', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq','DEMOQA')
        cy.wait(15000)
        //('#rt-table >rt-tr-group') de la tabla > selecciona las filas
        cy.get('#rt-table >rt-tr-group').should('have.length', 3)  
        })*/
          
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           }); 
  