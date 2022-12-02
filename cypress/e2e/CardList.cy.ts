/// <reference types="Cypress" />

describe('Card list on HomePage E2E', () => {
  it('should delete review', () => {
    cy.visit('/');
    cy.get('.new-user-dialog .add-button').click();

    cy.get('ul.homePage-cardList li').its('length').then(length => {
      cy.get('ul.homePage-cardList li:first-child > button').click();
      cy.get('[data-moreButton="delete"]').click();
      cy.get('.confirmDelete [role="delete"]').click();
      cy.get('ul.homePage-cardList li').should('have.length', length - 1);
    });
  });

  it('should redirect to edit page', () => {
    cy.get('ul.homePage-cardList li:first-child > button').click();
    cy.get('[data-moreButton="edit"]').click();
    cy.url().should('include', '/edit');
  });
});