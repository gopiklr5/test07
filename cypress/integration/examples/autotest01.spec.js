



describe('testsuite', ()=>{


  //  const text01;

    it('logintest', ()=>{
            cy.visit('http://eaapp.somee.com/');
            cy.get('a[id="loginLink"]').then(($txt)=>{
        return $txt.text();              

            }).as('txt')
           

            cy.get('a[id="loginLink"]').click();
            cy.get('#UserName').type("admin")
            cy.get('#Password').type("password")
            cy.get('input[value="Log in"]').click();

    })




})