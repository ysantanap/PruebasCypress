describe("Pruebas del curso #1 del 2023",() => {           //Crear un ambiente para varias pruebas
    
    it('Primera prueba del curso. Hola mundo', () => {     //Escribir la primera prueba. Mostrar "Hola mundo"
        cy.console.log("Hola MUNDO");
        cy.wait(1500)                                      //Tiempo que debe demorar antes de comenzar otra prueba.En milisegundos
    });

    it('2da prueba, escribir en el campo name', () => {
        cy.visit("https://demoqa.com/text-box")           //Visitar esa url
        cy.get("#username").type("Yudisel")               //Obtener ese campo por el id(#nombre_del_campo), escribir("_")
        cy.wait(2000)
    });

})//cierro esta intruccion 'describe'