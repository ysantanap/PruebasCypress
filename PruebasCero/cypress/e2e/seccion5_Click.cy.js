///<reference types="Cypress"/>

describe('Opciones Click', () => {
    it('Introduccion Asserts', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.get("#username").should('be.visible').type('Yudisel')      //be.visible, not be.visible, be.enable
        cy.wait(2000)
    })
  
    it('Click Sencillo', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('eq','OrangeHRM')
      cy.get('#username').type('Admin')
      cy.get('#password').type('admin123')
      cy.get('#submit').click
    })

    it.only('Click Force True', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('eq','OrangeHRM')
      cy.get('#username').type('Admin')
      cy.get('#password').type('admin123')
      cy.get('#submit').should("be.visible").click({force: true})
    })

    it('Click X_Y', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('eq','OrangeHRM')
      cy.get('#username').type('Admin')
      cy.get('#password').type('admin123')
      cy.get('#submit').click(50,5)
    })
  
  })