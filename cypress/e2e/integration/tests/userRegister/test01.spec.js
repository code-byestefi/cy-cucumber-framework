import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignUpMethods } from "../../../../support/pages/signUp/signUp.methods";
import { SignUpData } from "../../../../support/pages/signUp/signUp.data";


const user = CommonMethods.generateRandomString();
const email = `${user}@test.com`;

Given("I am on the home page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnHomeOption();
});

When("I navigate to the register page", () => {
    CommonMethods.clickOnSignUpOption();
});

And("I enter my username, email, and password", () => {
    SignUpMethods.insertUsername(user)
    SignUpMethods.insertEmail(email)
    SignUpMethods.insertPassword(SignUpData.validCredentials.password)
})

And("I click the Sign up button", () => {
    SignUpMethods.clickOnSignUpButton();
})

Then("I am taken to the home page as a logged in user", () => {
    CommonMethods.verifyFeedUser();
});


