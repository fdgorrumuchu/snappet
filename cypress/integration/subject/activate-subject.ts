describe('Given an subject', () => {
    context('when activating', () => {
        beforeEach(() => {
            cy.on('uncaught:exception', () => false);
            cy.login('TechChallengeTeacher', 'P@ssw0rd');
            cy.goToSubjectSettings();
        });
        afterEach(() => {
            cy.removeSubject('New activated subject');
        });
        it('should show subject activated', () => {
            cy.activateSubject('New activated subject');
            
            cy.get('subjectgroup-info-block')
                .last()
                .find('.panel-card-heading-text-inner strong')
                .should('exist')
                .should('have.text', 'New activated subject');
        });
    });
});