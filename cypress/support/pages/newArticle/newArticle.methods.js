import { NewArticleElements } from "./newArticle.elements";

export class NewArticleMethods {

    static insertTitle(title) {
        NewArticleElements.textBoxes.articleTitle.type(title).trigger('input').trigger('change');
    }

    static insertAboutArticle(aboutArticle) {
        NewArticleElements.textBoxes.articleAbout.type(aboutArticle).trigger('input').trigger('change');
    }

    static insertWriteArticle(writeText) {
        NewArticleElements.textBoxes.writeArticle.type(writeText).trigger('input').trigger('change');
    }

    static insertTags(tags) {
        NewArticleElements.textBoxes.tags.type(tags).trigger('input').trigger('change');
    }

    static clickOnPublishedArticleButton() {
        NewArticleElements.buttons.published.click();
    }

    static writeNewArticle(title, aboutArticle, writeText, tags) {
        this.insertTitle(title)
        this.insertAboutArticle(aboutArticle)
        this.insertWriteArticle(writeText)
        this.insertTags(tags)
    }

    static verifyArticleDetails(title, writeText) {
        cy.get('div.article-page h1').contains(title).should('be.visible');
        cy.get('div.article-page p').contains(writeText).should('be.visible');
    }

    static verifyExistArticleOnProfile(title){
        cy.get('div.article-preview h1').eq(0).contains(title).should('be.visible')
    }
}

