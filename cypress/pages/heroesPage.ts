class HeroesPage {
    
    selectorsList() {
        const selectors = {
            heroOne: '[alt="The Smoker"]',
            heroTwo: '[alt="Warp Speed"]',
            heroTree: '[alt="Cyonic"]',
            heroFour: '[alt="The Librarian"]',
            heroFive: '[alt="Mr Angular"]',
            heroSix: '[alt="Collect Call Paul"]',
            heroSeven: '[alt="Fly Girl"]'
        }
        return selectors
    }
    heroList() {
    cy.get(this.selectorsList().heroOne).should('be.visible')
    cy.get(this.selectorsList().heroTwo).should('be.visible')
    cy.get(this.selectorsList().heroTree).should('be.visible')
    cy.get(this.selectorsList().heroFour).should('be.visible')
    cy.get(this.selectorsList().heroFive).should('be.visible')
    cy.get(this.selectorsList().heroSix).should('be.visible')
    cy.get(this.selectorsList().heroSeven).should('be.visible')
};
    };

export default HeroesPage;