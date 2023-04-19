///<reference types="Cypress"/>

describe('Seccion 13. Asserts', () => {
before(function(){
    cy.log('Ejecutando prueba automatizadas')         //precondiciones para iniciar
})
beforeEach(function(){
    cy.visit('https://automationpractice.pl/index.php')       //condiciones a ejecutar en cada caso de prueba
})

//assert_ to.equal(true) or (false)
//        to.not.equal(valor_esperado)
//        to.be.true, to.be.false, to.exist, to.be.lessThan(menor q), greaterThan(mayor q)

    it('passes', () => {
      //expect(1==1, "mensaje del error si falla la prueba").to.equal(true)

    })
  
afterEach(function(){
    cy.log('para terminar cada caso de prueba')          //para terminar cada caso de prueba
})

after(function(){
    cy.log('cerrando las pruebas automatizadas')          //poscondiciones para lo general
})

          Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           }); 
  
  })