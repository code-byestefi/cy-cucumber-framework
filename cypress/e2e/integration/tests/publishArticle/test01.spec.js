import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { CommonMethods } from "../../../../support/pages/common/common.methods";
import { SignInMethods } from "../../../../support/pages/signIn/signIn.methods";
import { SignInData } from "../../../../support/pages/signIn/signIn.data";
import { NewArticleMethods } from "../../../../support/pages/newArticle/newArticle.methods";
import { NewArticleData } from "../../../../support/pages/newArticle/newArticle.data";

const uniqueTitle = CommonMethods.generateUniqueTitle();

Given("I am logged in", () => {
    CommonMethods.navigateToConduit();
    CommonMethods.clickOnSignInOption();
    SignInMethods.insertUsername(SignInData.validCredentials.username)
    SignInMethods.insertPassword(SignInData.validCredentials.password)
    SignInMethods.clickOnSignInButton();
    CommonMethods.verifyFeedUser();
});

When("I navigate to the article creation page", () => {
    CommonMethods.clickOnNewArticleOption();
});

And("I enter the title, description, content, and tags of my article", () => {
    NewArticleMethods.writeNewArticle(uniqueTitle,
        NewArticleData.writeNewArticle.articleAbout,
        NewArticleData.writeNewArticle.writeArticle,
        NewArticleData.writeNewArticle.tags
    )
});

And("I click the Publish Article button", () => {
    NewArticleMethods.clickOnPublishedArticleButton();
});

Then("The article should be published", () => {
    NewArticleMethods.verifyArticleDetails(uniqueTitle,
        NewArticleData.writeNewArticle.writeArticle,
    )
});

And("The article should be on my profile", () => {
    CommonMethods.clickOnUserProfile();
    NewArticleMethods.verifyExistArticleOnProfile(uniqueTitle)
});