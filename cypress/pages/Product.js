class Product {
    visit() {
        cy.visit("https://automationexercise.com/");
    }

    buttomProducts() {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    }

    searchProduct(producto) {
        cy.get('#search_product').type(producto);
        cy.get('#submit_search').click();
    }

    pricePerProduct() {
        cy.get('.productinfo > h2').then(function (element) {
            this.textoPrecio = element.text();
            cy.log(this.textoPrecio);
        });
    }

    moreInfoProduct() {
        cy.get('.choose > .nav > li > a').click();
    }
}

module.exports = new Product();