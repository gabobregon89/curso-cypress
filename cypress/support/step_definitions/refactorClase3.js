import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const product = require('../../pages/Product')

Given("el usuario abre la web de automation exercise", function () {
    product.visit();
});

When("el usuario hace clic en el boton products", function () {
    product.buttomProducts();
});

When("el usuario realiza la busqueda del producto {string}", function (producto) {
    product.searchProduct(producto);
});

When("el usuario obtiene el precio del producto", function () {
    product.pricePerProduct();
});

When("el usuario hace clic en en el boton view product", function () {
    product.moreInfoProduct();
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