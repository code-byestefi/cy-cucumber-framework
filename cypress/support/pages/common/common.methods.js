import { CommonData } from './common.data';
import { CommonElements } from './common.elements';

export class CommonMethods {

    static navigateToConduit() {
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonData.url);
    }

    static clickOnHomeOption() {
        CommonElements.topMenu.home.click();
    }

    static clickOnSignInOption() {
        CommonElements.topMenu.signIn.click();
    }

    static clickOnSignUpOption() {
        CommonElements.topMenu.signUp.click();
    }

    static verifyFeedUser() {
        CommonElements.signedFeed.should('exist');
    }

    static verifyAlert(expectedMessage) {
        cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }

    static logout() {
    }

}