/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });

  it('', () => {
    cy.get('.input-container > div> input').eq(0).type('fake11@email.com');
    cy.get('.input-container > div > input').eq(1).type('ducdeptrai');
    cy.get('.input-container > div > input').eq(2).type('ducdeptrai');
    cy.get('form').submit();
    cy.visit('http://localhost:3000/');
    cy.get('.input-container > div > input').eq(0).type('fake11@email.com');
    cy.get('.input-container > div > input').eq(1).type('ducdeptrai');
    cy.get('form').submit();
  });
});
