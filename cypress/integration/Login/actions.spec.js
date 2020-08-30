/// <reference types="cypress" />
const id = Math.floor(Math.random() * 1000);
const email = `test${id}@gmail.com`;
const password = '123456';
context('Sign up success', () => {
  it('Register a new user', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
    cy.get('.input-container > div > input').eq(2).type(password);
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.input-container > div> input').eq(0).type(`Test ${id}`);
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
context('Signup fail', () => {
  it('Register with already taken email', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
    cy.get('.input-container > div > input').eq(2).type(password);
    cy.get('form').submit();
    cy.get('form > div').eq(3).contains('This email is already taken.');
  });
});
context('Login success', () => {
  it('Login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type(password);
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
context('Login fail', () => {
  it('Invalid email or password', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.input-container > div> input').eq(0).type(email);
    cy.get('.input-container > div > input').eq(1).type('abcxyz');
    cy.get('form').submit();
    cy.get('form > div').eq(2).contains('Invalid email or password.');
  });
});
