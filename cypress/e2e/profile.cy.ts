describe('profile page', () => {
	it('should render the profile page', () => {
		cy.login();

		cy.visit('/profile');

		cy.get('input[name="userName"]').clear().type('Jane');

		cy.get('[data-testid="user-form-submit"]').click();

		cy.location('pathname').should('eq', '/');

		cy.contains('Jane').should('be.visible');
	});
});
