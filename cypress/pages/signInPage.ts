class SignInPage {
    
    selectorsList() {
        const selectors = {
            emailField: '[name="email"]',
            passwordField: '[name="password"]',
            invalidRequire: '.text-red-500'
        }
        return selectors
    };
    accessSignIn() {
        cy.visit('http://localhost:3000/heroes');
        cy.contains('button', 'Login').click();
    };
    fillForm(email, password) {
        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.contains('button', 'Sign in').click();
    };
    fillFail(email, password) {
        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.contains('button', 'Sign in').click();
        cy.get(this.selectorsList().invalidRequire).should('be.visible')
    };
    incompleteForm(email, password) {
        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.contains('button', 'Sign in').click();
        cy.get(this.selectorsList().invalidRequire).should('be.visible')
    };
    adminForm(email, password) {
        cy.get(this.selectorsList().emailField).type(email);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.contains('button', 'Sign in').click();
    }
}

export default SignInPage;