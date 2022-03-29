describe('Given an subject', () => {
    describe('when changing the grade of a subject', () => {
        beforeEach(() => {
            cy.on('uncaught:exception', () => false);
            cy.login('TechChallengeTeacher', 'P@ssw0rd');
            cy.goToSubjectSettings();
        });
        afterEach(() => {
            cy.changeSubjectGrade('Rekenen', 'Groep 6')
        });
        it('should update the subject grade', () => {
            cy.changeSubjectGrade('Rekenen', 'Groep 7');
            
            cy.findSubject('Rekenen').as('subject-item');
            cy.get('@subject-item').find('a:contains("Wijzig")').click();
            cy.get('@subject-item').find('.select2-selection').should('have.text', 'Groep 7');
            cy.get('@subject-item').find('button:contains("Annuleren")').click();
        });
    });
});
    