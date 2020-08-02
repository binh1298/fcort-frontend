/// <reference types="cypress" />
const id = Math.floor(Math.random() * 1000);
const email = `test${id}@gmail.com`;
const password = '123456';
context('Sign up success', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
    cy.get('.input-container > div > input').eq(2).type(password);

    cy.get('form').submit();
  });
  afterEach(() => {
    cy.get('.input-container > div > input').eq(0).type('Testing user');
    cy.get('form').submit();
  });
  it('Check the status', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
context('Signup fail', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
  });
  it('Password must be the same!', () => {
    cy.get('.input-container > div > input').eq(2).type('123abc').should('eq', password);
    cy.get('form').submit();
  });
});
context('Login success', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
    cy.get('form').submit();
  });

  it('Check the status', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
context('Login fail', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('.input-container > div> input').eq(0).type(email);
  });

  it('Wrong password', () => {
    cy.get('.input-container > div > input')
      .eq(1)
      .type('ducdeptrai')
      .should('eq', password);
    cy.get('form').submit();
  });
});
