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

And("I am on the profile page of a user I am already following", () => {
    FeedMethods.verifyOtherUserProfile(); 
});

When("I click the unfollow button", () => {
    FeedMethods.clickOnFollowButton();
});

Then("The unfollow button should change to a follow button", () => {
    FeedMethods.verifyChangeFollowTheButton(); 
});

And("Their articles no longer appear on my feed", () => {

});