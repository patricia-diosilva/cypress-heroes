class ControlPage {
    
    selectorsList() {
        const selectors = {
            newHeroButtom: '[href="/heroes/new"]',
            editButtom: '[data-cy="pencil"]',
            trashButtom: '[data-cy="trash"]',
            likeButtom: '[data-cy="like"]',
            moneyButtom: '[data-cy="money"]',
        };
        return selectors
    };
    adminControl() {
    cy.get(this.selectorsList().newHeroButtom).should('be.visible');
    cy.get(this.selectorsList().editButtom).should('be.visible');
    cy.get(this.selectorsList().trashButtom).should('be.visible');
    cy.get(this.selectorsList().likeButtom).should('be.visible');
    cy.get(this.selectorsList().moneyButtom).should('be.visible');


};

    userControl() {
    cy.get(this.selectorsList().likeButtom).should('be.visible');
    cy.get(this.selectorsList().moneyButtom).should('be.visible');
    cy.get(this.selectorsList().newHeroButtom).should('not.exist');
    cy.get(this.selectorsList().editButtom).should('not.exist');
    cy.get(this.selectorsList().trashButtom).should('not.exist');
    };
};


export default ControlPage;