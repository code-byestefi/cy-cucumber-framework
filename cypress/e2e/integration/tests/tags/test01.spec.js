import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { FeedMethods } from "./../../../../support/pages/feed/feed.methods";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";

Given("I am on the home page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
    SignInMethods.login(SignInData.validCredentials.username, SignInData.validCredentials.password);
    CommonMethods.verifyFeedUser();
});

When("I click on a tag on the sidebar", () => {
    FeedMethods.clickOnTag();
});

Then("A tab with the tag name becomes visible", () => {
    FeedMethods.verifyTagTabIsVisible();
});

And("A list of articles with the tag appear", () => {
    FeedMethods.verifyArticlesAppearInFeed();
});
