/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('.input-container > div> input').eq(0).type('fake19@email.com');
    cy.get('.input-container > div > input').eq(1).type('ducdeptrai');
    cy.get('form').submit();
  });

  it('check the url', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
