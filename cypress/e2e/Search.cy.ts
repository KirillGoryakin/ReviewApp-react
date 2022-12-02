/// <reference types="Cypress" />

describe('Search component on HomePage E2E', () => {
  it('should search by text', () => {
    cy.visit('/');
    cy.get('.new-user-dialog .add-button').click();

    cy.get('ul.homePage-cardList li').should('have.length.above', 1);

    cy.get('.homePage-search form input')
      .as('searchInput')
      .should('be.visible');
    cy.get('.homePage-search form button')
      .as('searchButton')
      .should('be.visible');

    cy.get('@searchInput').type('Super man');
    cy.get('@searchInput').should('have.value', 'Super man');

    cy.get('@searchButton').click();

    cy.url().should('include', 's=Super+man');
    cy.get('ul.homePage-cardList li').should('have.length', 1);

    // Clear search
    cy.get('@searchInput').clear();
    cy.get('@searchInput').should('have.value', '');

    cy.get('@searchButton').click();

    cy.url().should('not.include', 's=');
    cy.get('ul.homePage-cardList li').should('have.length.above', 1);
  });

  it('should filter by folder', () => {
    cy.get('.folderSelector-search').click();

    cy.get('[data-folderSelectorItem="Watched"]').click();

    cy.get('.folderSelector-search button').should('have.text', 'Watched');
    cy.url().should('include', 'folder=Watched');
    cy.get('ul.homePage-cardList li').should('have.length', 1);

    // Clear search
    cy.get('.homePage-clearFilters').click();

    cy.get('.folderSelector-search button').should('not.have.text', 'Watched');
    cy.url().should('not.include', 'folder=');
    cy.get('ul.homePage-cardList li').should('have.length.above', 1);
  });

  it('should filter by tags', () => {
    cy.get('.tagSelector-search').click();

    cy.get('[data-tagBage="Films"]').click();
    cy.get('[data-tagBage="Super Heroes"]').click();

    cy.url().should('include', 'tags=Films%2CSuper+Heroes');
    cy.get('body').click();
    cy.get('ul.homePage-cardList li').should('have.length', 2);

    // Clear search
    cy.get('.homePage-clearFilters').click();

    cy.url().should('not.include', 'tags=');
    cy.get('ul.homePage-cardList li').should('have.length.above', 2);
  });

  it('should sort reviews', () => {
    cy.get('.homePage-sort [role="button"]').click();
    cy.get('[role="option"][data-value="highest-score"]').click();

    cy.url().should('include', 'sort=highest-score');
    cy.get('ul.homePage-cardList li:first-child').should('include.text', '11');

    // Clear search
    cy.get('.homePage-clearFilters').click();
    cy.url().should('not.include', 'sort=');
  });
});