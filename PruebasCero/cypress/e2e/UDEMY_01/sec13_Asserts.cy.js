///<reference types="Cypress"/>

describe('Seccion 13. Asserts', () => {
before(function(){
    cy.log('Ejecutando prueba automatizadas')         //precondiciones para iniciar
})
beforeEach(function(){
    //cy.visit('https://buggy.justtestit.org/')       //condiciones a ejecutar en cada caso de prueba
    cy.visit('http://automationpractice.pl/index.php')
    cy.title().should('eq','My Store')
    cy.wait(3000)
})

afterEach(function(){
    cy.log('para terminar cada caso de prueba')          //para terminar cada caso de prueba
})

after(function(){
    cy.log('cerrando las pruebas automatizadas')          //poscondiciones para lo general
})

it('Assert contains 2', () => {
    cy.contains('Women').click();
    cy.wait(3000)
  })

  it.only('Assert find (buscar), eq (indice del elemento)', () => {   //varais opciones dentro de una clase
    cy.contains('Women').click();
    cy.wait(3000)
    
    cy.get('.product-container').find('.product-image-container').eq(3).click()
    //cy.get('#product_condition').contains('New product')             //0k
    //'#nome .nomeX' Nombre del bloque y dentro de ese bloque el nombre del otro elemento
    cy.get('#product_condition .editable').then(x=>{  //Almacenar en x el texto.    
        cy.log(x.text())                              //Promesa para imprimir el texto que aparece en ese campo
        let texto = x.text()
        if(texto == 'New product'){
            cy.log('El vestido es un producto nuevo')
        }                
    })

    cy.get('#our_price_display').then(y => {
        cy.log(y.text())
        let precio = y.text()
        precio = precio.slice(1,5)
        cy.log(precio)

        if(precio > 30){
            cy.log('El precio es mayor que el deseado')
            //cy.get('//*[@id="columns"]/div[1]/span[2]/span[1]/a/span').click() //error en el selector
        } else{
            cy.log('el precio esta por debajo del deseado')
            cy.get('#add_to_cart').should('be.visible').click()
            cy.wait(5000)
        }
    })
    
    cy.wait(3000)
  })

//assert_ to.equal(true) or (false)
//        to.not.equal(valor_esperado)
//        to.be.true, to.be.false, to.exist, to.be.lessThan(menor q), greaterThan(mayor q)

    /*it('creacion de comandos', () => { 
        cy.validaTitle('Buggy Cars Rating')      //no funciona ver tambien el trabajo con fixtures   
        cy.wait(5000)
    })*/

    /*it('Assert contains', () => {
        cy.title().should('eq','Buggy Cars Rating')
        cy.contains('Popular Make')
        cy.get("[class='btn btn-success-outline']").contains('Register').click()
        cy.wait(5000)
    })

    it('passes', () => {
      expect(1==1, "mensaje del error si falla la prueba").to.equal(true)
    })*/

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
    }); 
  
  })