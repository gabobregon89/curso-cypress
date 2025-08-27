Feature: Prueba inicial

Scenario: Buscando el primer elemento
    Given ingreso en la pagina de prueba
    When hago click en el elemento Forms
    And hago click en el elemento Practice Form
    And ingreso el nombre "Gabriel"
    And ingreso el apellido "Obregon"
    And ingreso el mail "prueba_test@test.com"
    And selecciono el genero male
    And ingreso el numero de telefono "1155447788"
    And presiono el boton de submit
    Then veo el mensaje de gracias por enviar el formulario
    And el campo subject tiene que estar vacio