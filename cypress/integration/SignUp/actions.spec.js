/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
    cy.get('.input-container > div> input').eq(0).type('fake19@email.com');
    cy.get('.input-container > div > input').eq(1).type('ducdeptrai');
    cy.get('.input-container > div > input').eq(2).type('ducdeptrai');
    cy.get('form').submit();
  });
  afterEach(() => {
    cy.get('.input-container > div > input').eq(0).type('Thien Duc');
    cy.get('form').submit();
  });
  it('check the url', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
