/// <reference types="cypress"/>

describe('signup and log in test', () => {
     let randomNum=Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    let loginName=`user${randomNum}`

    let password=`${randomNum}223344`

    it('sign up test', () => {
  
        cy.visit('https://automationteststore.com/index.php?rt=account/create');

        cy.get('#AccountFrm_firstname').type("ziad")

        cy.get('#AccountFrm_lastname').type("abazeed")

        cy.get('#AccountFrm_email').type(loginName+"@outlook.com")

        cy.get('#AccountFrm_telephone').type("0011443355")

        cy.get('#AccountFrm_fax').type("0033221144")

        cy.get('#AccountFrm_company').type("privet")

        cy.get('#AccountFrm_address_1').type("fourthstreet")

        cy.get('#AccountFrm_address_2').type("complex#1")

        cy.get('#AccountFrm_city').type("amman")

        cy.get('#AccountFrm_zone_id').select('Aberdeen')

        cy.get('#AccountFrm_postcode').type("00962")

        cy.get('#AccountFrm_country_id').select("United Kingdom")

        cy.get('#AccountFrm_loginname').type(loginName)

        cy.get('#AccountFrm_password').type(password)

        cy.get('#AccountFrm_confirm').type(password)

        cy.get('#AccountFrm_newsletter1').check()

        cy.get('#AccountFrm_agree').check()

        cy.get('.col-md-2 > .btn').click()
   
        
    });

    it('login test', () => {

        cy.visit("https://automationteststore.com/index.php?rt=account/login")

        cy.get('#loginFrm_loginname').type(loginName)

        cy.get('#loginFrm_password').type(password)

        cy.get('#loginFrm > fieldset > .btn').click()


        
    });
    
});