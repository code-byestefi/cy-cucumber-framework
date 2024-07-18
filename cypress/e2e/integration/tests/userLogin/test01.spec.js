import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";


Given("I am on the login page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
});

When("I enter my valid email and password", () => {
    SignInMethods.insertUsername(SignInData.validCredentials.username)
    SignInMethods.insertPassword(SignInData.validCredentials.password)
});

And("I click the Sign in button", () => {
    SignInMethods.clickOnSignInButton();
})

Then("I am taken to the home page as a logged in user after logging in", () => {
    CommonMethods.verifyFeedUser();
});