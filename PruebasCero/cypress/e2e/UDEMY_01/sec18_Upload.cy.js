///<reference types="Cypress"/>
import 'cypress-file-upload'

describe('Seccion 18. Upload file', () => {
    it('Cargado archivos en el test, Upload', () => {
      cy.visit('https://demoqa.com/upload-download')
      cy.title().should('eq','DEMOQA')
      cy.wait(15000)

      const imagen = 'imgUpload.jfif'
      cy.get('[type="file"]').attachFile(imagen)
      cy.wait(3000)

    })
    
          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           }); 
  
  })