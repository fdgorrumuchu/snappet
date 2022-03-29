
/// <reference types="cypress" />

import './commands'

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): void;
            goToSubjectSettings(): void;
            activateSubject(name: string): void;
            removeSubject(name: string): void;
            findSubject(name: string): void;
            renameSubject(previousName: string, nextName: string): Cypress.Chainable;
            changeSubjectGrade(name: string, newGrade: string): void;
        }
    }
}