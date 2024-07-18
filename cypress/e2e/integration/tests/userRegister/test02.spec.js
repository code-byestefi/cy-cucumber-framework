import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignUpMethods } from "../../../../support/pages/signUp/signUp.methods";
import { SignUpData } from "../../../../support/pages/signUp/signUp.data";


Given("I am on the register page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignUpOption();
});

When("I enter a username that is already in use while the rest of the fields are filled in appropriately", () => {
    SignUpMethods.insertUsername(SignUpData.existUsernameCredentials.username)
    SignUpMethods.insertEmail(SignUpData.existUsernameCredentials.email)
    SignUpMethods.insertPassword(SignUpData.existUsernameCredentials.password)
});

When("I enter an email that is already in use while the rest of the fields are filled in appropriately", () => {
    SignUpMethods.insertUsername(SignUpData.existEmailCredentials.username)
    SignUpMethods.insertEmail(SignUpData.existEmailCredentials.email)
    SignUpMethods.insertPassword(SignUpData.existEmailCredentials.password)
});

And("I click the Sign up button", () => {
    SignUpMethods.clickOnSignUpButton();
})

Then("I should see an error message indicating the username is already taken", () => {
    CommonMethods.verifyAlert('username has already been taken')
});


Then("I should see an error message indicating the email is already taken", () => {
    CommonMethods.verifyAlert('email has already been taken')
});

