class NewHeroPage {
    
    selectorsList() {
        const selectors = {
            newHero: '[href="/heroes/new"]',
            heroName: '[name="name"]',
            heroPrice: '[name="price"]',
            heroFans: '[name="fans"]',
            heroSaves: '[name="saves"]',
            heroPowers: '[data-cy="powersSelect"]',
            heroAvatar: '[type="file"]',
            deleteHero: '[data-cy="trash"]',
            invalidRequire: '.text-red-500',
            submitedHero: '[data-cy="hero-card"]'
        }
        return selectors
    };

        createNewHero(name, price, fans, saves, powers) {
            cy.get(this.selectorsList().newHero).click();
            cy.get(this.selectorsList().heroName).type(name);
            cy.get(this.selectorsList().heroPrice).type(price);
            cy.get(this.selectorsList().heroFans).type(fans);
            cy.get(this.selectorsList().heroSaves).type(saves);
            cy.get(this.selectorsList().heroPowers).select(powers);
            cy.get(this.selectorsList().heroAvatar).selectFile('cypress/fixtures/avatar.jpg')
            cy.contains('button', 'Submit').click();
            cy.get(this.selectorsList().submitedHero).should('be.visible');

        };

        createIncompleteHero(name, price, fans, saves, powers) {
            cy.get(this.selectorsList().newHero).click();
            cy.get(this.selectorsList().heroName).type(name);
            cy.get(this.selectorsList().heroPrice).type(price);
            cy.get(this.selectorsList().heroFans).type(fans);
            cy.get(this.selectorsList().heroSaves).type(saves);
            cy.get(this.selectorsList().heroPowers).type(powers);
            cy.get(this.selectorsList().heroAvatar).selectFile('cypress/fixtures/avatar.jpg')
            cy.contains('button', 'Submit').click();
            cy.get(this.selectorsList().invalidRequire).should('be.visible')
        };

        deleteNewHero() {
            cy.contains('[data-cy="hero-card"]', 'Super Paw')
            .find('[data-cy="trash"]')
            .click();
            cy.contains('.bg-red-600', 'Yes').click();            
        }
    }

export default NewHeroPage;