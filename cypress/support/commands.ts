Cypress.Commands.add('login', (userName?: string, jobTitle?: string) => {
	cy.visit('/');

	cy.get('input[name="userName"]').type(userName || 'John');

	cy.get('input[name="jobTitle"]').type(jobTitle || 'Developer');

	cy.get('[data-testid="user-form-submit"]').click();

	cy.location('pathname').should('eq', '/');
});

declare namespace Cypress {
	interface Chainable {
		login(userName?: string, jobTitle?: string): Chainable<void>;
	}
}
