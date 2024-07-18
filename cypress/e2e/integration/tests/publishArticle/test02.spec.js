import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";
import { NewArticleMethods } from "../../../../support/pages/newArticle/newArticle.methods";
import { NewArticleData } from "../../../../support/pages/newArticle/newArticle.data";

let uniqueTitle = '';

Given("I am on the article creation page", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
    SignInMethods.insertUsername(SignInData.validCredentials.username)
    SignInMethods.insertPassword(SignInData.validCredentials.password)
    SignInMethods.clickOnSignInButton();
    CommonMethods.verifyFeedUser();
    CommonMethods.clickOnNewArticleOption();
});

When("I enter the description, content, and tags of my article but leave the title blank", () => {
    NewArticleMethods.writeNewArticle('',
        NewArticleData.writeNewArticle.articleAbout,
        NewArticleData.writeNewArticle.writeArticle,
        NewArticleData.writeNewArticle.tags
    )
});

When("I enter the title, content, and tags of my article but leave the description blank", () => {
    uniqueTitle = CommonMethods.generateUniqueTitle();
    NewArticleMethods.writeNewArticle(uniqueTitle,
        NewArticleData.writeNewArticle.articleAbout = '',
        NewArticleData.writeNewArticle.writeArticle,
        NewArticleData.writeNewArticle.tags
    )
});

When("I enter the title, description, and tags of my article but leave the body blank", () => {
    uniqueTitle = CommonMethods.generateUniqueTitle();
    NewArticleMethods.writeNewArticle(uniqueTitle,
        NewArticleData.writeNewArticle.articleAbout,
        NewArticleData.writeNewArticle.writeArticle = '',
        NewArticleData.writeNewArticle.tags
    )
});

When("I enter the title, description, and body of my article but leave tags blank", () => {
    uniqueTitle = CommonMethods.generateUniqueTitle();
    NewArticleMethods.writeNewArticle(uniqueTitle,
        NewArticleData.writeNewArticle.articleAbout,
        NewArticleData.writeNewArticle.writeArticle,
        NewArticleData.writeNewArticle.tags = ''
    )
});

Then("The Publish Article button should be disabled", () => {
    cy.shouldBeDisabled("button[type='submit']");
    //NewArticleMethods.clickOnPublishedArticleButton();
    //CommonMethods.verifyAlert("title can't be blank")


});
