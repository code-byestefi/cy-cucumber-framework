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

    static clickOnNewArticleOption(){
        CommonElements.topMenuAccount.newArticle.click();
    }

    static clickOnUserProfile() {
        CommonElements.topMenuAccount.account.click();
    }

    static generateRandomString(length=10) {
        let result = ''
        const characters = 'abcdefghijklmnñopqrstuvwxyz'
        const charactersLength = characters.length;
        let counter = 0;

        while(counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
            counter += 1;
        }
        return result;
    }

    static generateUniqueTitle() {
        const timestamp = new Date().getTime();
        return `Test Article Title ${timestamp}`;
    }

}