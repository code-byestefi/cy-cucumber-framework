import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignUpMethods } from "../../../../support/pages/signUp/signUp.methods";
import { SignUpData } from "../../../../support/pages/signUp/signUp.data";


Given("I am on the register page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignUpOption();
});

When("I do not enter a username while the rest of the fields are filled in appropriately", () => {
    SignUpMethods.insertUsername(SignUpData.usernameInvalidCredentials.username)
    SignUpMethods.insertEmail(SignUpData.usernameInvalidCredentials.email)
    SignUpMethods.insertPassword(SignUpData.usernameInvalidCredentials.password)
});

When("I do not enter an email while the rest of the fields are filled in appropriately", () => {
    SignUpMethods.insertUsername(SignUpData.emailInvalidCredentials.username)
    SignUpMethods.insertEmail(SignUpData.emailInvalidCredentials.email)
    SignUpMethods.insertPassword(SignUpData.emailInvalidCredentials.password)
});

When("I do not enter a password while the rest of the fields are filled in appropriately", () => {
    SignUpMethods.insertUsername(SignUpData.passwordInvalidCredentials.username)
    SignUpMethods.insertEmail(SignUpData.passwordInvalidCredentials.email)
    SignUpMethods.insertPassword(SignUpData.passwordInvalidCredentials.password)
});


And("I click the Sign up button", () => {
    SignUpMethods.clickOnSignUpButton();
})

Then("I should see an error message indicating the username can't be blank", () => {
    CommonMethods.verifyAlert("username can't be blank")
});


Then("I should see an error message indicating the email can't be blank", () => {
    CommonMethods.verifyAlert("email can't be blank")
});


Then("I should see an error message indicating the password can't be blank", () => {
    CommonMethods.verifyAlert("password can't be blank")
});

