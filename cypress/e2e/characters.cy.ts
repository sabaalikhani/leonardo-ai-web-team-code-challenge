describe('characters page', () => {
	it('should render the characters page', () => {
		cy.login();

		cy.visit('/characters/1');

		cy.get('[data-testid="character-modal-trigger"]').first().click();

		cy.get('[data-testid="character-info"]').should('be.visible');

		cy.get('button[data-part="close-trigger"]').click();

		cy.get('[data-testid="character-info"]').should('not.exist');

		cy.get('[data-testid="character-pagination"]').find('a').eq(2).click();

		cy.location('pathname').should('eq', '/characters/2');
	});
});
