describe('Given an subject', () => {
    describe('when renaming the subject', () => {
        beforeEach(() => {
            cy.on('uncaught:exception', () => false);
            cy.login('TechChallengeTeacher', 'P@ssw0rd');
            cy.goToSubjectSettings();
        });
        describe('and the subject name is valid', () => {
            afterEach(() => {
                cy.renameSubject('Rekenen 2', 'Rekenen');
            });
            it('should update the subject name', () => {
                cy.renameSubject('Rekenen', 'Rekenen 2');
                cy.findSubject('Rekenen 2').should('exist');
            });
        });
        describe('and the subject name is empty', () => {
            it('should show subject name as required', () => {
                cy.findSubject('Rekenen').as('item');
                cy.renameSubject('Rekenen', '');
                cy.get('@item').find('input[title="Verplicht"]').should('exist');
            });
        });
    });
});