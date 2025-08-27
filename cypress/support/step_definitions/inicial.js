import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("ingreso en la pagina de prueba", function () {
    // Se agrega linea para evitar error de cross-origin
    Cypress.on("uncaught:exception", (err, runnable) => {
        if (err.message.includes("Script error")) {
            return false; // evita que el test falle
        }
    });
    cy.visit("http://demoqa.com");
})

When("hago click en el elemento Forms", function () {
    cy.get('.category-cards > :nth-child(2) > :nth-child(1)').click();
})

When("hago click en el elemento Practice Form", function () {
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
})

When("ingreso el nombre {string}", (user) => {
    cy.get('#firstName').type(user);
})

When("ingreso el apellido {string}", (username) => {
    cy.get('#lastName').type(username);
})

When("ingreso el mail {string}", (mail) => {
    cy.get('#userEmail').type(mail);
})

When("selecciono el genero male", function () {
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
})

When("ingreso el numero de telefono {string}", (phone) => {
    cy.get('#userNumber').type(phone);
})

When("presiono el boton de submit", function () {
    cy.get('#submit').click();
})

Then("veo el mensaje de gracias por enviar el formulario", function () {
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
})

When("el campo subject tiene que estar vacio", function () {
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text', '');
})  