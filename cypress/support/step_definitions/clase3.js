import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario abre la web de automation exercise", function () {
    cy.visit("https://automationexercise.com/");
});

When("el usuario hace clic en el boton products", function () {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
});

When("el usuario realiza la busqueda del producto {string}", function (producto) {
    cy.get('#search_product').type(producto);
    cy.get('#submit_search').click();
});

When("el usuario obtiene el precio del producto", function () {
    cy.get('.productinfo > h2').then(function (element) {
        this.textoPrecio = element.text();
        cy.log(this.textoPrecio);
    });
});

When("el usuario hace clic en en el boton view product", function () {
    cy.get('.choose > .nav > li > a').click();
});

Then("el sistema muestra la informacion del producto {string}", function (element) {
    cy.get('.product-information > h2').should('have.text', element);
});

Then("el sistema muestra el mismo precio del producto que se obtuvo en la busqueda", function () {
    cy.get(':nth-child(5) > span').then(function (element) {
        const textoPrecioDetalle = element.text();
        cy.log(textoPrecioDetalle);
        expect(textoPrecioDetalle).to.equal(this.textoPrecio);
    });
});

