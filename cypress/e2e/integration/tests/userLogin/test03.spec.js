import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";


Given("I am on the login page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
});

When("I enter my email and an incorrect password", () => {
    SignInMethods.insertUsername(SignInData.validCredentials.username)
    SignInMethods.insertPassword(SignInData.invalidCredentials.password)
});

And("I click the Sign in button", () => {
    SignInMethods.clickOnSignInButton();
})

Then("I should see an error message indicating the email or password is incorrect", () => {
    CommonMethods.verifyAlert('email or password is invalid');
});