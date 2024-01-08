/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default (Intentional Failure)', () => {
    // Intentionally fail the test by asserting an incorrect number of items
    cy.get('.todo-list li').should('have.length', 3)

    // Other assertions that might fail
    cy.get('.todo-list li').first().should('have.text', 'Incorrect text')
    cy.get('.todo-list li').last().should('have.text', 'Incorrect text')
  })

  // Add other test cases as needed
})
