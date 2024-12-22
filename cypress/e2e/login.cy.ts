describe('login page', () => {
	it('should login successfully', () => {
		cy.visit('/');

		cy.location('pathname').should('eq', '/login');

		cy.login();
	});
});
