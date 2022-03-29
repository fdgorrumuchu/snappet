Cypress.Commands.add('login', (email: string, password: string) => { 
    cy.visit('https://teacher.snappet.org');
    cy.get('[data-test="main-ctn"]').find('[aria-label="Username"]').type(email);
    cy.get('[data-test="main-ctn"]').find('[aria-label="Password"]').type(password);
    cy.get('[data-test="main-ctn"]').find('form').submit();
    cy.wait(2000);
});

Cypress.Commands.add('goToSubjectSettings', () => cy.visit('https://teacher.snappet.org/V3/292634/Teach#')); 

Cypress.Commands.add('activateSubject', (name: string) => {
    cy.get('subjectgroup-add-block').click();
    cy.get('a:contains("Volgende")').click();
    cy.get('a:contains("Volgende")').click();
    cy.get('.card').first().click();
    cy.get(`label:contains("Naam van het nieuwe vak") + input`).clear().type(name);
    cy.get('button:contains("Vak activeren")').click();
    cy.wait(3000);
});

Cypress.Commands.add('findSubject', (name) => cy.get(`subjectgroup-info-block strong:contains("${name}")`).parentsUntil('subjectgroup-info-block'))

Cypress.Commands.add('removeSubject', (name) => {
    cy.findSubject(name).as('subject-item');
    cy.get('@subject-item').find('a:contains("Wijzig")').click();
    cy.get('@subject-item').find('button:contains("Verwijder vak")').click();
    cy.get('.delete-confirm').find('button:contains("Verwijder")').click();
});

Cypress.Commands.add('renameSubject', (previousName: string, nextName: string) => {
    cy.findSubject(previousName).as('subject-item');
    cy.get('@subject-item').find('a:contains("Wijzig")').click();
    cy.get('@subject-item').find('input').clear();
    if (nextName) {
        cy.get('@subject-item').find('input').type(nextName);
    }
    cy.get('@subject-item').find('.button-bar > .btn-primary').click();
 });

 Cypress.Commands.add('changeSubjectGrade', (name: string, newGrade: string) => {
    cy.findSubject(name).as('subject-item');
    cy.get('@subject-item').find('a:contains("Wijzig")').click();
    if (newGrade) {
        cy.get('@subject-item').find('.select2-container').click();
        cy.get('@subject-item').find(`.select2-results li:contains(${newGrade})`).click();
    }
    cy.get('@subject-item').find('.button-bar > .btn-primary').click();
});
