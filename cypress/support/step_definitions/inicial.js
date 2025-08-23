import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("ingreso en la pagina de prueba", function () {
    cy.visit("https://demoqa.com/automation-practice-form");
})

When("ingreso el nombre {string}", function (user) {
    cy.get('#firstName').type(user);
})

When("ingreso el apellido {string}", function (username) {
    cy.get('#lastName').type(username);
})

// When("ingreso el mail {string}", function (mail) {
//     cy.get('#userEmail').type(mail);
// })

// When("selecciono el genero", function () {
//     cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').check();
// })