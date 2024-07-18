import { FeedElements } from "./feed.elements";
import { SignInData } from "../signIn/signIn.data";

export class FeedMethods {


    static verifyOtherUserProfile() {
        const { username } = SignInData.validCredentials;

        FeedElements.articleTitles.should('be.visible');

        FeedElements.articleTitles
            .not(`:contains("${username}")`)  
            .eq(0)  
            .click(); 

        cy.wait(5000)
    }

    static clickOnFollowButton() {
        return FeedElements.followButton.click();
    }

    static verifyChangeUnfollowTheButton() {
        cy.wait(5000)
        FeedElements.followButton
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.contain('Unfollow');
            });
    }

    static verifyChangeFollowTheButton() {
        cy.wait(5000)
        FeedElements.followButton
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.contain('Follow');
            });
    }
}
