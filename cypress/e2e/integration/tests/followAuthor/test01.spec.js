import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";
import { FeedMethods } from "../../../../support/pages/feed/feed.methods";
import { CommonMethods } from "../../../../support/pages/common/common.methods";

Given("I am logged in", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
    SignInMethods.insertUsername(SignInData.validCredentials.username)
    SignInMethods.insertPassword(SignInData.validCredentials.password)
    SignInMethods.clickOnSignInButton();
    CommonMethods.verifyFeedUser();
});

And("I am on another user's profile page", () => {
    FeedMethods.verifyOtherUserProfile();
});

When("I click the follow button", () => {
    FeedMethods.clickOnFollowButton();
});

Then("The follow button should change to an unfollow button", () => {
    FeedMethods.verifyChangeUnfollowTheButton();
    cy.wait(5000)
});

And("Their articles appear on my feed", () => {

});